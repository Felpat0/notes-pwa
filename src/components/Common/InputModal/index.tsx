import { useState } from "react";
import { createRoot } from "react-dom/client";
import { strings } from "../../../localization/strings";
import { Button } from "../Button";
import { Input } from "../Input";
import { Modal } from "../Modal";
import { ButtonsContainer, InputModalMessage } from "./style";

type Props = {
    message: React.ReactNode | string;
    onConfirm: (value: string) => void;
    onCancel?: () => void;
    style?: React.CSSProperties;
};

export const ConfirmModal: React.FC<Props> = ({
    message,
    onConfirm,
    onCancel,
    style,
}) => {
    const [value, setValue] = useState("");

    return (
        <Modal isOpen={true} style={style}>
            {typeof message === "string" ? (
                <InputModalMessage>{message}</InputModalMessage>
            ) : (
                <>{message}</>
            )}
            <Input value={value} onChange={(e) => setValue(e.target.value)} />
            <ButtonsContainer>
                {onCancel && (
                    <Button variant={"secondary"} onClick={onCancel}>
                        {strings.common.cancel}
                    </Button>
                )}
                <Button onClick={() => onConfirm(value)}>
                    {strings.common.confirm}
                </Button>
            </ButtonsContainer>
        </Modal>
    );
};

let root: any = null;

const createElement = (properties: Props) => {
    let target = document.getElementById("input-modal");
    if (target) {
        root = createRoot(target);
        root.render(
            <ConfirmModal
                {...properties}
                onConfirm={(value) => {
                    properties.onConfirm(value);
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
        target.id = "input-modal";
        document.body.appendChild(target);
        root = createRoot(target);
        root.render(
            <ConfirmModal
                {...properties}
                onConfirm={(value) => {
                    properties.onConfirm(value);
                    removeElement();
                }}
                onCancel={
                    properties.onCancel
                        ? () => {
                              properties.onCancel();
                              removeElement();
                          }
                        : undefined
                }
            />
        );
    }
};

const removeElement = () => {
    const target = document.getElementById("input-modal");
    if (target) {
        root.unmount(target);
    }
};

export const inputModal = (properties: Props) => {
    createElement(properties);
};
