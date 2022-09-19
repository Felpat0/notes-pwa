import { InputContainer, InputIconContainer, StyledInput } from "./style";

type Props = React.InputHTMLAttributes<any> & {
    borderless?: boolean;
    Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | string;
};

export const Input: React.FC<Props> = ({ Icon, ...props }) => {
    return (
        <InputContainer>
            <StyledInput {...props} />
            {Icon && (
                <InputIconContainer>
                    {typeof Icon === "string" ? (
                        <img
                            src={Icon}
                            alt={""}
                            style={{ width: "18px", height: "18px" }}
                        />
                    ) : (
                        <Icon style={{ width: "18px", height: "18px" }} />
                    )}
                </InputIconContainer>
            )}
        </InputContainer>
    );
};
