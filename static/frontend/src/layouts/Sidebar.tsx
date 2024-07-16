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
import StopwatchIcon from '@atlaskit/icon/glyph/stopwatch';
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
                    description="Settings for Asset Synchronization"
                    iconBefore={<PreferencesIcon label="" />}
                >
                    Asset Synchronization
                </Header>
            </NavigationHeader>
            <NestableNavigationContent initialStack={[]}>
                <Section isList>
                    <Link to="/">
                        <ButtonItem
                            isSelected={location.pathname === '/'}
                            iconBefore={
                                <SettingsIcon label="Request Type Settings" />
                            }
                        >
                            Request Type Settings
                        </ButtonItem>
                    </Link>

                    <Link to="/project-settings">
                        <ButtonItem
                            isSelected={
                                location.pathname === '/project-settings'
                            }
                            iconBefore={
                                <SettingsIcon label="Project Settings" />
                            }
                        >
                            Project Settings
                        </ButtonItem>
                    </Link>

                    <Link to="/synchronization-logs">
                        <ButtonItem
                            isSelected={
                                location.pathname === '/synchronization-logs'
                            }
                            iconBefore={<StopwatchIcon label="Logs" />}
                        >
                            Logs
                        </ButtonItem>
                    </Link>
                </Section>
            </NestableNavigationContent>
        </SideNavigation>
    );
};
