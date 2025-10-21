import { auth } from '@clerk/nextjs/server';

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
	const { isAuthenticated, redirectToSignIn } = await auth();
	if (!isAuthenticated) return redirectToSignIn();
	return <div>{children}</div>;
};

export default AdminLayout;
