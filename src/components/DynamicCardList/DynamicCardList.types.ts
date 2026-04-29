import type { ReactNode } from 'react';

import type { TDynamicCardLayoutModes } from '../../types/Common.types';

export interface IProps {
    children: ReactNode | ReactNode[];
    layout: TDynamicCardLayoutModes;
}
