import { css } from '@emotion/react';
import { Content, LeftSidebar, Main, PageLayout } from '@atlaskit/page-layout';
import { SideNavigationContent } from './layouts/Sidebar';
import { useEffect, useState } from 'react';
import { view } from '@forge/bridge';
import { Router, Route, Routes } from 'react-router';
import { token } from '@atlaskit/tokens';
import Toastr from './components/Toastr.tsx';
import { Action, Location } from '@remix-run/router/history.ts';
import Spinner from '@atlaskit/spinner';
import Blanket from '@atlaskit/blanket';
import { useAppStore } from './store/appStore.ts';
import SamplePage from './pages/SamplePage.tsx';

const contentStyles = css({
	boxSizing: 'border-box',
	height: '100%',
	padding: token('space.250'),
	backgroundColor: token('color.background.neutral.subtle'),
	outlineOffset: -4,
	overflowY: 'auto',
});

const spinnerStyles = css({
	position: 'fixed',
	zIndex: '9999',
	top: 'calc( 50% - ( 48px / 2) );',
	right: 'calc( 50% - ( 48px / 2) );',
});

function App() {
	const { isSpinnerShow } = useAppStore();

	const [history, setHistory] = useState<import('history').History | null>(
		null,
	);

	useEffect(() => {
		view
			.createHistory()
			.then((newHistory: import('history').History | null) => {
				setHistory(newHistory);
			});
	}, []);

	const [historyState, setHistoryState] = useState<{
		action: Action | undefined;
		location: Location;
	} | null>(null);

	useEffect(() => {
		if (!historyState && history) {
			setHistoryState({
				action: history.action as Action,
				location: history.location as Location,
			});
		}
	}, [history, historyState]);

	useEffect(() => {
		if (history) {
			history.listen((location, action) => {
				setHistoryState({
					action: action as Action,
					location: location as Location,
				});
			});
		}
	}, [history]);

	return history && historyState ? (
		<Router
			navigator={history}
			navigationType={historyState.action}
			location={historyState.location}
		>
			<Toastr />

			{isSpinnerShow && (
				<>
					<div css={spinnerStyles}>
						<Spinner size="large" interactionName="load" label="Loading" />
					</div>

					<Blanket
						isTinted={true}
						shouldAllowClickThrough={false}
						testId="basic-blanket"
					/>
				</>
			)}

			<PageLayout>
				<Content testId="content">
					<LeftSidebar
						isFixed={false}
						width={300}
						id="project-navigation"
						skipLinkTitle="Project Navigation"
						testId="left-sidebar"
						resizeGrabAreaLabel="Resize Current project sidebar"
						resizeButtonLabel="Current project sidebar"
						valueTextLabel="Width"
					>
						<SideNavigationContent />
					</LeftSidebar>
					<Main id="content" skipLinkTitle="Main Content">
						<div css={contentStyles}>
							<Routes>
								<Route path="/" element={<SamplePage />}></Route>
							</Routes>
						</div>
					</Main>
				</Content>
			</PageLayout>
		</Router>
	) : (
		<div>'Loading...'</div>
	);
}

export default App;
