import { useState } from "react";
import { Button } from "../../components/Common/Button";
import { Datepicker } from "../../components/Common/Datepicker";
import {
    sendTestNotification,
    sendTestNotificationSW,
} from "../../utils/notifications";

export const TestScreen: React.FC = () => {
    const [date, setDate] = useState<Date>();

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Datepicker
                selected={date}
                onChange={(date) => !Array.isArray(date) && setDate(date)}
                dateFormat={"dd/MM/yyyy HH:mm"}
                showTimeInput
            />
            <Button onClick={() => sendTestNotificationSW(date)}>
                Test notification SW
            </Button>
            <Button onClick={sendTestNotification}>Test notification</Button>
        </div>
    );
};
