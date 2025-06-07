import { ToastrIcon, ToastrType } from '../enums/toastr.enum.ts';

export interface ToastrContent {
	id: number;
	icon: ToastrIcon;
	message: string;
	title: string;
	type: ToastrType;
	actions: { content: string; onClick: () => void }[];
}
