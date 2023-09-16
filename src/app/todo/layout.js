export default function DashboardLayout({
	children, // will be a page or nested layout
}) {
	return (
		<section>
			{/* Include shared UI here e.g. a header or sidebar */}
			<nav></nav>
			<h1>Dashboard Layout</h1>

			{children}
		</section>
	)
}