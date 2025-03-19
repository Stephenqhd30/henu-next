import {Edu_AU_VIC_WA_NT_Hand, Noto_Serif_SC, Varela_Round} from 'next/font/google';
import {Noto_Sans_SC} from 'next/font/google';
import {Playwrite_US_Modern} from 'next/font/google';
import {JetBrains_Mono} from 'next/font/google';
import {Nunito_Sans} from 'next/font/google';

export const varela_round = Varela_Round({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400'],
});

export const noto_sans_sc = Noto_Sans_SC({
	subsets: ['vietnamese'],
	display: 'swap',
	weight: ['400'],
});

export const noto_sans_sc_bold = Noto_Sans_SC({
	subsets: ['vietnamese'],
	display: 'swap',
	weight: ['700'],
});

export const playwrite_us_modern = Playwrite_US_Modern({
	display: 'swap',
	weight: ['400'],
});

export const jetbrains_mono = JetBrains_Mono({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400'],
});

export const article_font = Nunito_Sans({
	subsets: ['latin'],
	display: 'swap',
	weight: ['300'],
	fallback: ['Noto Sans SC'],
});

export const error_font = Edu_AU_VIC_WA_NT_Hand({
	subsets: ['latin'],
	display: 'swap',
	weight: ['700'],
});

export const noto_serif_sc_bold = Noto_Serif_SC({
	subsets: ['vietnamese'],
	display: 'swap',
	weight: ['600'],
});

export const moment_font = Noto_Serif_SC({
	subsets: ['latin'],
	display: 'swap',
	weight: ['300'],
});

export const title_font = Noto_Serif_SC({
	weight: ['600'],
	subsets: ['latin'],
	display: 'swap'
});

