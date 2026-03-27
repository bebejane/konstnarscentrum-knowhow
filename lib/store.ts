import { create } from 'zustand';
import { useShallow } from 'zustand/shallow';

export interface StoreState {
	showMenu: boolean;
	showSubMenu: boolean;
	showMenuMobile: boolean;
	showSearch: boolean;
	images: FileField[];
	imageId: string | null;
	darkMode: boolean;
	invertedMenu: boolean;
	setShowMenu: (showMenu: boolean) => void;
	setShowSubMenu: (showSubMenu: boolean) => void;
	setShowMenuMobile: (showMenuMobile: boolean) => void;
	setInvertedMenu: (invetedMenu: boolean) => void;
	setImages: (images: FileField[] | undefined) => void;
	setImageId: (imageId: string | null) => void;
	setShowSearch: (showSearch: boolean) => void;
}

const useStore = create<StoreState>((set) => ({
	showMenu: true,
	showSubMenu: false,
	showMenuMobile: false,
	showSearch: false,
	images: [],
	imageId: null,
	darkMode: false,
	invertedMenu: false,
	setShowMenu: (showMenu: boolean) =>
		set((state) => ({
			showMenu,
		})),
	setShowSubMenu: (showSubMenu: boolean) =>
		set((state) => ({
			showSubMenu,
		})),
	setShowMenuMobile: (showMenuMobile: boolean) =>
		set((state) => ({
			showMenuMobile,
		})),
	setImageId: (imageId) =>
		set((state) => ({
			imageId,
		})),
	setImages: (images: FileField[] | undefined) =>
		set((state) => ({
			images,
		})),
	setDarkMode: (darkMode: boolean) =>
		set((state) => ({
			darkMode,
		})),
	setInvertedMenu: (invertedMenu: boolean) =>
		set((state) => ({
			invertedMenu,
		})),
	setShowSearch: (showSearch: boolean) =>
		set((state) => ({
			showSearch,
		})),
}));

export default useStore;
export { useStore, useShallow };
