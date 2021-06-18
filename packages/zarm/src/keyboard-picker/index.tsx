import * as React from 'react';
import type { BaseKeyBoardPickerProps } from './interface';
import Keyboard from '../keyboard';
import Popup from '../popup';

export interface KeyboardPickerProps extends BaseKeyBoardPickerProps {
  prefixCls?: string;
  className?: string;
}

const KeyboardPicker = React.forwardRef<unknown, KeyboardPickerProps>((props, ref) => {
  const { prefixCls, className, visible, destroy, onKeyClick, ...restProps } = props;

  const keyboardPickerRef = (ref as any) || React.createRef<HTMLDivElement>();
  const [currentVisible, setCurrentVisible] = React.useState(visible);

  const onKeyboardKeyClick = (key: string) => {
    if (typeof onKeyClick === 'function') {
      onKeyClick(key);
    }
  };

  React.useEffect(() => {
    setCurrentVisible(visible);
  }, [visible]);

  return (
    <Popup className={className} visible={currentVisible} mask={false} destroy={destroy}>
      <div className={prefixCls} ref={keyboardPickerRef}>
        <Keyboard onKeyClick={onKeyboardKeyClick} {...restProps} />
      </div>
    </Popup>
  );
});

KeyboardPicker.displayName = 'KeyboardPicker';

KeyboardPicker.defaultProps = {
  prefixCls: 'za-keyboard-picker',
  visible: false,
  type: 'number',
  destroy: true,
};

export default KeyboardPicker;
