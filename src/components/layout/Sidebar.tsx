import { menuItems } from '@/constants';
import { TMenuItem } from '@/types';
import { UserButton } from '@clerk/nextjs';
import { ActiveLink } from '../common';
import { ModeToggle } from '../common/ModeToggle';

const Sidebar = () => {
	return (
		<aside className="p-5 border-r border-r-gray-200 dark:border-opacity-10 bg-white dark:bg-grayDarker flex flex-col">
			<a href="/" className="font-bold text-3xl inline-block mb-5">
				<span className="text-primary">A</span>cademy
			</a>
			<ul className="flex flex-col gap-2">
				{menuItems.map((item, index) => (
					<MenuItem key={index} url={item.url} title={item.title} icon={item.icon} />
				))}
			</ul>
			<div className="mt-auto flex items-center gap-5">
				<ModeToggle />
				<UserButton />
			</div>
		</aside>
	);
};

function MenuItem({ url = '/', title = '', icon }: TMenuItem) {
	return (
		<li>
			<ActiveLink url={url}>
				{icon}
				{title}
			</ActiveLink>
		</li>
	);
}

export default Sidebar;
