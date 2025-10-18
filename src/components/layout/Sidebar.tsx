import { menuItems } from '@/constants';
import { TMenuItem } from '@/types';
import ActiveLink from '../common/ActiveLink';

const Sidebar = () => {
	return (
		<aside className="p-5 border-r border-r-gray-200">
			<a href="/" className="font-bold text-3xl inline-block mb-5">
				<span className="text-primary">A</span>cademy
			</a>
			<ul className="flex flex-col gap-2">
				{menuItems.map((item, index) => (
					<MenuItem key={index} url={item.url} title={item.title} icon={item.icon} />
				))}
			</ul>
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
