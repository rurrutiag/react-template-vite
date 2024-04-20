import { FeatureProvider } from '#libs/feature';
import { AppRouter } from './App.router.tsx';
import { featureHandler } from './app.features.tsx';
import './styles/app.scss';

/**
 * Here occur the initialization,
 * for routing, store and main app.
 *
 * @returns app container
 */
export const App: React.FC = (): React.ReactElement => {
	return (
		<FeatureProvider handler={featureHandler}>
			<AppRouter />
		</FeatureProvider>
	);
};
