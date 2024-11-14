import { AutoDismissFlag, FlagGroup } from '@atlaskit/flag';
import SuccessIcon from '@atlaskit/icon/glyph/check-circle';
import InfoIcon from '@atlaskit/icon/glyph/info';
import WarningIcon from '@atlaskit/icon/glyph/warning';
import ErrorIcon from '@atlaskit/icon/glyph/error';
import { token } from '@atlaskit/tokens';
import { ToastrIcon } from '../enums/toastr.enum.ts';
import { ToastrContent } from '../interfaces/toastr.interface.ts';
import { useAppStore } from '../store/appStore.ts';

export default function Toastr() {
  const { toastr, removeToastr } = useAppStore();

  return (
    <FlagGroup onDismissed={removeToastr}>
      {toastr.map((toastrContent: ToastrContent) => {
        return (
          <AutoDismissFlag
            id={toastrContent.id}
            icon={
              toastrContent.icon === ToastrIcon.SUCCESS ? (
                <SuccessIcon
                  primaryColor={token('color.icon.success')}
                  label="Success"
                  size="medium"
                />
              ) : toastrContent.icon === ToastrIcon.INFO ? (
                <InfoIcon
                  primaryColor={token('color.icon.information')}
                  label="Info"
                  size="medium"
                />
              ) : toastrContent.icon === ToastrIcon.WARNING ? (
                <WarningIcon
                  primaryColor={token('color.icon.warning')}
                  label="Info"
                  size="medium"
                />
              ) : toastrContent.icon === ToastrIcon.ERROR ? (
                <ErrorIcon
                  primaryColor={token('color.icon.danger')}
                  label="Info"
                  size="medium"
                />
              ) : (
                ''
              )
            }
            appearance={toastrContent.type}
            key={toastrContent.id}
            title={toastrContent.title}
            description={toastrContent.message}
            actions={toastrContent.actions}
          />
        );
      })}
    </FlagGroup>
  );
}
