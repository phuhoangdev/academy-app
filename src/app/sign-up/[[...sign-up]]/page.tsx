import { SignUp } from '@clerk/nextjs';

export default function Page() {
	return (
		<div className="p-10 h-screen flex items-center justify-center bg-slate-800">
			<SignUp />
		</div>
	);
}
