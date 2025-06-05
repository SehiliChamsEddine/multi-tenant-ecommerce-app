import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
	return (
		<div className=" flex flex-col  p-6 gap-14">
			<div>
				<Button variant={'elevated'}> I am button</Button>
			</div>
			<div>
				<Progress value={50} max={100} />
			</div>
			<div>
				<Input placeholder="I am an input" />
			</div>
			<div>
				<Textarea placeholder="I am a textArea" />
			</div>
			<div>
				<Checkbox />
			</div>
		</div>
	);
}
