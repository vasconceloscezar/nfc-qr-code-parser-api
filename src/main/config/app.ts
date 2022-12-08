import express, {Express} from 'express';
import setupRoutes from './routes';

export async function setupApp(): Promise<Express>{
	const app = express()
	setupRoutes(app)
	return app;
}