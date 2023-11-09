import { Nunito } from 'next/font/google'
import './globals.css'

import type { Metadata } from 'next'

import Navbar from './components/navbar/Navbar'
import ToasterProvider from './providers/ToasterProvider'

import RegisterModal from './components/modals/RegisterModal'
import LoginModal from './components/modals/LoginModal'
import RentModal from './components/modals/RentModal'
import SearchModal from './components/modals/SearchModal'

import getCurrentUser from './actions/getCurrentUser'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Airbnb',
	description: 'Airbnb clone',
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const currentUser = await getCurrentUser()

	return (
		<html lang='en'>
			<body className={font.className}>
				<ToasterProvider />
				<SearchModal />
				<RentModal />
				<LoginModal />
				<RegisterModal />
				<Navbar currentUser={currentUser} />
				<div className='pb-20 pt-28'>{children}</div>
			</body>
		</html>
	)
}
