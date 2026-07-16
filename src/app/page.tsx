import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Experience } from '@/components/experience';
import { Hero } from '@/components/hero';
import { Navigation } from '@/components/navigation';
import { Projects } from '@/components/project';
import { Skills } from '@/components/skill';

export default function Portfolio() {
	return (
		<div className="min-h-screen bg-background">
			<Navigation />
			<main>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Experience />
				<Contact />
			</main>
		</div>
	);
}
