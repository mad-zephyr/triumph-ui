import { TButton } from '@/common/ui/button/button';
import {
  GComponentUiButton,
  GENUM_COMPONENTUIBUTTON_VARIANT,
  Maybe,
} from '@/types/types';

const buttonVariant = (
  variant?: Maybe<GENUM_COMPONENTUIBUTTON_VARIANT>
): TButton['variant'] => {
  switch (variant) {
    case GENUM_COMPONENTUIBUTTON_VARIANT.Primary: {
      return 'prime';
    }
    case GENUM_COMPONENTUIBUTTON_VARIANT.Secondary: {
      return 'secondary';
    }

    default: {
      return 'outline';
    }
  }
};

export const getButtons = (button?: Maybe<GComponentUiButton>): TButton => {
  return {
    title: button?.title,
    url: button?.url,
    variant: buttonVariant(button?.variant),
  };
};
