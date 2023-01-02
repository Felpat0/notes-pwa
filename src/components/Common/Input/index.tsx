import { forwardRef } from "react";
import { InputContainer, InputIconContainer, StyledInput } from "./style";

type Props = React.InputHTMLAttributes<any> & {
    borderless?: boolean;
    Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | string;
};

type Ref = HTMLInputElement;

export const Input = forwardRef<Ref, Props>(({ Icon, ...props }, ref) => {
    return (
        <InputContainer>
            <StyledInput {...props} ref={ref} />
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
});
