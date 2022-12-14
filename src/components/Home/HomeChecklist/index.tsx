import { useState, useCallback } from "react";
import { strings } from "../../../localization/strings";
import {
    getChecklist,
    createOrUpdateChecklist,
} from "../../../storage/checklists";
import { ChecklistType } from "../../../types";
import { Checklist } from "../../Common/Checklist";
import { Datepicker } from "../../Common/Datepicker";
import { Section } from "../Section";
import { HomeChecklistContainer } from "./style";

export const HomeChecklist: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [currentChecklist, setCurrentChecklist] = useState(
        getChecklist(selectedDate)
    );

    const onChange = useCallback((checklist: ChecklistType) => {
        setCurrentChecklist(createOrUpdateChecklist(checklist));
    }, []);

    const onDateChange = useCallback((date: Date) => {
        setSelectedDate(date);
        setCurrentChecklist(getChecklist(date));
    }, []);

    return currentChecklist ? (
        <Section
            title={strings.home.checklist}
            rightIcon={
                <Datepicker
                    selected={selectedDate}
                    onChange={onDateChange}
                    dateFormat={"dd/MM/yyyy"}
                    withPortal
                />
            }
            closable
        >
            <HomeChecklistContainer>
                <Checklist checklist={currentChecklist} onChange={onChange} />
            </HomeChecklistContainer>
        </Section>
    ) : (
        <></>
    );
};
