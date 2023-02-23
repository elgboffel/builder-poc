import {
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport,
  SelectProps as PrimitiveSelectProps,
  SelectOptionProps,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
} from "@components/primitives/Select/Select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { Text } from "@components/primitives/Text/Text";
import {
  selectContent,
  selectIcon,
  selectItemIndicator,
  selectScrollButton,
  selectTrigger,
  selectViewport,
} from "@components/ui/Select/select.css";

export type SelectProps = PrimitiveSelectProps & {
  variant?: "input" | "simple" | "float";
  label?: string;
  hideButtons?: boolean;
  displayValue?: string | undefined | boolean;
};

const Select: React.FC<SelectProps> = ({
  children,
  label,
  variant,
  hideButtons = false,
  displayValue,
  ...otherProps
}) => {
  return (
    <div>
      <SelectRoot {...otherProps}>
        <SelectTrigger className={selectTrigger}>
          {label && (
            <Text {...(variant === "input" && { size: "tiny" })} as={"span"}>
              {label}
            </Text>
          )}
          <Text as={"div"} {...(variant === "simple" && { weight: "light" })}>
            {displayValue ? <SelectValue aria-label={otherProps.value}>{displayValue}</SelectValue> : <SelectValue />}
          </Text>
          {!hideButtons && (
            <span>
              <SelectIcon className={selectIcon}>
                <ChevronDownIcon />
              </SelectIcon>
            </span>
          )}
        </SelectTrigger>
        <SelectContent className={selectContent} position={"popper"}>
          {!hideButtons && (
            <SelectScrollUpButton className={selectScrollButton}>
              <ChevronUpIcon />
            </SelectScrollUpButton>
          )}
          <SelectViewport className={selectViewport}>
            <SelectGroup {...otherProps}>{children}</SelectGroup>
          </SelectViewport>
          {!hideButtons && (
            <SelectScrollDownButton>
              <ChevronDownIcon />
            </SelectScrollDownButton>
          )}
        </SelectContent>
      </SelectRoot>
    </div>
  );
};

const ResetOption: React.FC<Omit<SelectOptionProps, "value">> = ({ children }) => {
  return <Option value={""}>{children}</Option>;
};

const Option: React.FC<SelectOptionProps> = ({ children, value, ...otherProps }) => {
  return (
    <SelectItem {...otherProps} value={value}>
      <SelectItemText>{children}</SelectItemText>
      <SelectItemIndicator className={selectItemIndicator}>
        <CheckIcon />
      </SelectItemIndicator>
    </SelectItem>
  );
};

export { Select, Option, ResetOption };
