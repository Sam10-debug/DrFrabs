import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: `Platnova | Your all-in-one money and lifestyle app`,
		short_name: `Platnova`,
		description: `Global money transfers, secure savings, bill payments, defi deposits, and swaps; 
        physical and virtual cards; a multicurrency wallet; gift cards; tuition fee payments; a vault for saving in Pounds, 
        Dollars, and Naira; flight bookings; and lifestyle services such as booking lounges, stays, and vacations.`,
		lang: `en`,
		display: `standalone`,
		start_url: `/`,
		background_color: `#fff`,
		theme_color: `#fff`,
		icons: [
			{
				src: '/favicon-16x16.png',
				sizes: '16x16',
				type: 'image/png',
			},
			{
				src: '/favicon-32x32.png',
				sizes: '32x32',
				type: 'image/png',
			},
			{
				src: '/favicon-180x180.png',
				sizes: '180x180',
				type: 'image/png',
			},
			{
				src: '/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon',
			},
		],
	}
}
