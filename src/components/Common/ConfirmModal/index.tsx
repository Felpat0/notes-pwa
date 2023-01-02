import { createRoot } from "react-dom/client";
import { strings } from "../../../localization/strings";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { ButtonsContainer, ConfirmModalMessage } from "./style";

type Props = {
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
};

export const ConfirmModal: React.FC<Props> = ({
    message,
    onConfirm,
    onCancel,
}) => {
    return (
        <Modal isOpen={true} style={{ padding: "1rem" }}>
            <ConfirmModalMessage>{message}</ConfirmModalMessage>
            <ButtonsContainer>
                <Button variant={"secondary"} onClick={onCancel}>
                    {strings.common.cancel}
                </Button>
                <Button onClick={onConfirm}>{strings.common.confirm}</Button>
            </ButtonsContainer>
        </Modal>
    );
};

let root: any = null;

const createElement = (properties: Props) => {
    let target = document.getElementById("confirm-modal");
    if (target) {
        root = createRoot(target);
        root.render(
            <ConfirmModal
                {...properties}
                onConfirm={() => {
                    properties.onConfirm();
                    removeElement();
                }}
                onCancel={() => {
                    properties.onCancel();
                    removeElement();
                }}
            />
        );
    } else {
        target = document.createElement("div");
        target.id = "confirm-modal";
        document.body.appendChild(target);
        root = createRoot(target);
        root.render(
            <ConfirmModal
                {...properties}
                onConfirm={() => {
                    properties.onConfirm();
                    removeElement();
                }}
                onCancel={() => {
                    properties.onCancel();
                    removeElement();
                }}
            />
        );
    }
};

const removeElement = () => {
    const target = document.getElementById("confirm-modal");
    if (target) {
        root.unmount(target);
    }
};

export const confirmAlert = (properties: Props) => {
    createElement(properties);
};
