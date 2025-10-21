import Image from 'next/image';
import Link from 'next/link';
import { IconEye, IconStar } from '../icons';

const courseInfo = [
	{ icon: (className?: string) => <IconEye className={className} />, label: '1000' },
	{ icon: (className?: string) => <IconStar className={className} />, label: '5.0' },
];

const CourseItem = () => {
	return (
		<div className="bg-white dark:bg-grayDarker border border-gray-200 dark:border-opacity-10 p-4 rounded-2xl">
			<Link href="#" className="block h-[180px] relative">
				<Image
					src="https://plus.unsplash.com/premium_photo-1756131994915-c92a65718df0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740"
					alt=""
					width={600}
					height={400}
					className="w-full h-full object-cover rounded-lg"
					sizes="@media (min-width: 640px) 300px, 100vw"
				/>
				<span className="inline-block px-3 py-1 rounded-full absolute top-3 right-3 z-10 bg-green-600 text-white font-medium text-xs">
					New
				</span>
			</Link>
			<div className="pt-4">
				<h3 className="font-bold text-lg mb-5 dark:text-gray-200">Khóa học NextJS Pro - Xây dựng E Learning System hoàn chỉnh</h3>
				<div className="flex items-center justify-center gap-3 mb-5 text-sm text-gray-500 dark:text-grayDark">
					{courseInfo.map((item, index) => (
						<div key={index} className="flex items-center gap-1">
							{item.icon('size-4')}
							<span>{item.label}</span>
						</div>
					))}
					<span className="font-bold text-primary ml-auto text-base">850.000</span>
				</div>
				<Link
					href="#"
					className="flex items-center justify-center w-full mt-10 rounded-lg text-white font-semibold bg-primary hover:bg-opacity-90 transition-all h-12"
				>
					Xem chi tiết
				</Link>
			</div>
		</div>
	);
};

export default CourseItem;
