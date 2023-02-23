import { WithChildren } from "@infrastructure/types/helpers/with-children";
import { Box } from "@components/primitives/Box/Box";
import { FC } from "react";
import { root, column } from "@components/primitives/Grid/grid.css";
import { hasChildOfReactType } from "@common/helpers/has-child-of-react-type";
import classnames from "classnames";

export type ColumnValues = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type OffsetValues = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ColumnProps = WithChildren & {
  size?: Array<ColumnValues | null>;
  offset?: Array<OffsetValues | null>;
};

const Column: FC<ColumnProps> = ({ size = [12], offset, children, ...otherProps }) => {
  const hasColumnChild = hasChildOfReactType(children, Column);
  const sizeAdapter = size?.map((size, i) => (size ? column({ size: `bp${i}-${size}` }) : ""));
  const offsetAdapter = offset?.map((offset, i) => (offset ? column({ offset: `bp${i}-${offset}` }) : ""));

  return (
    <Box className={classnames([hasColumnChild ? root : [], sizeAdapter, offsetAdapter])} {...otherProps}>
      {children}
    </Box>
  );
};

export type GridProps = WithChildren;

const Grid: FC<GridProps> = (props) => <Box {...props} className={root} />;

export { Grid, Column };
