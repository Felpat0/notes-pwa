import {
    ModalChildrenContainer,
    ModalContainer,
    ModalContent,
    ModalTitle,
    ModalTitleContainer,
} from "./style";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
};

export const Modal: React.FC<Props> = ({
    isOpen,
    onClose,
    title,
    children,
    style,
}) => {
    return (
        <ModalContainer isOpen={isOpen} onClick={onClose}>
            <ModalContent
                style={style}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <ModalTitleContainer>
                    <ModalTitle>{title}</ModalTitle>
                </ModalTitleContainer>
                <ModalChildrenContainer>{children}</ModalChildrenContainer>
            </ModalContent>
        </ModalContainer>
    );
};
