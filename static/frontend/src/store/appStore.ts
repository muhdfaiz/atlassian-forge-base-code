import { create } from 'zustand';
import { ToastrIcon, ToastrType } from '../enums/toastr.enum.ts';
import { ToastrContent } from '../interfaces/toastr.interface.ts';
import { devtools } from 'zustand/middleware';

interface AppState {
	toastr: ToastrContent[];
	removeToastr: () => void;
	addToastr: (
		type: ToastrType,
		icon: ToastrIcon,
		title: string,
		message: string,
		actions: { content: string; onClick: () => void }[],
	) => void;
	isSpinnerShow: boolean;
	showSpinner: () => void;
	hideSpinner: () => void;
}

const addToastr = (
	toastr: ToastrContent[],
	type: ToastrType,
	icon: ToastrIcon,
	title: string,
	message: string,
	actions: { content: string; onClick: () => void }[] = [],
) => {
	const cloneToaster: ToastrContent[] = [...toastr];

	const newToastrId = cloneToaster.length + 1;
	const newToastr = cloneToaster.slice();

	newToastr.splice(0, 0, {
		id: newToastrId,
		icon: icon,
		title: title,
		message: message,
		type: type,
		actions: actions,
	});

	return newToastr;
};

export const useAppStore = create<AppState>()(
	devtools((set) => ({
		// Show and hide toastr
		toastr: [],
		removeToastr: () =>
			set((state) => ({
				toastr: state.toastr.slice(1),
			})),
		addToastr: (
			type: ToastrType,
			icon: ToastrIcon,
			title: string,
			message: string,
			actions: { content: string; onClick: () => void }[],
		) =>
			set((state) => ({
				toastr: addToastr(state.toastr, type, icon, title, message, actions),
			})),
		// Show and hide spinner
		isSpinnerShow: false,
		showSpinner: () =>
			set(() => ({
				isSpinnerShow: true,
			})),
		hideSpinner: () =>
			set(() => ({
				isSpinnerShow: false,
			})),
	})),
);
