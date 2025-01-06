import { type ClassValue, clsx } from 'clsx'
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props'
import { twMerge } from 'tailwind-merge'

export const imageBlur: { placeholder: PlaceholderValue } = {
	placeholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8WQ8AAncBeri2L5wAAAAASUVORK5CYII=',
}

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export async function copyToClipboard(text: string) {
	var textArea = document.createElement('textarea')
	textArea.value = text
	textArea.style.top = '0'
	textArea.style.left = '0'
	textArea.style.position = 'fixed'
	document.body.appendChild(textArea)
	textArea.focus()
	textArea.select()
	try {
		document.execCommand('copy')
	} catch (err) {}

	document.body.removeChild(textArea)

	return new Promise((r) => setTimeout(r, 250))
}

export const isObjectEmpty = (obj: { [key: string | number]: any }) => Object.entries(obj).length < 1

export function isiOS() {
	return /iPhone|iPad|iPod/i.test(navigator.userAgent)
}

export function isAndroid() {
	return /Android/i.test(navigator.userAgent)
}
