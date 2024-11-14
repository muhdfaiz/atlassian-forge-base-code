import {
  NavigationHeader,
  NestableNavigationContent,
  SideNavigation,
  Header,
} from '@atlaskit/side-navigation';
import SettingsIcon from '@atlaskit/icon/glyph/settings';
import PreferencesIcon from '@atlaskit/icon/glyph/preferences';
import { useLocation, useNavigate } from 'react-router';
import { ButtonItem, Section } from '@atlaskit/menu';
import { FC } from 'react';

interface LinkProps {
  to: string;
  children: JSX.Element;
}

const Link: FC<LinkProps> = ({ to, children }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={(event) => {
        event.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </div>
  );
};

export const SideNavigationContent = () => {
  const location = useLocation();

  return (
    <SideNavigation label="Asset Synchronization" testId="side-navigation">
      <NavigationHeader>
        <Header
          description="Settings for sample app"
          iconBefore={<PreferencesIcon label="" />}
        >
          Sample App
        </Header>
      </NavigationHeader>
      <NestableNavigationContent initialStack={[]}>
        <Section isList>
          <Link to="/">
            <ButtonItem
              isSelected={location.pathname === '/'}
              iconBefore={<SettingsIcon label="Sample Page" />}
            >
              Sample Page
            </ButtonItem>
          </Link>
        </Section>
      </NestableNavigationContent>
    </SideNavigation>
  );
};
