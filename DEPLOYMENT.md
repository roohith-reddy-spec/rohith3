# KAYDEN Deployment Guide

This project is a single Next.js application. The UI and the API routes live in the same app under `src/app`, so the simplest production deployment is to host the full app on Vercel.

## Architecture summary

- Frontend + API: Next.js app in this repo
- Database: MongoDB Atlas
- Hosting: Vercel
- Runtime config: environment variables in the deployment platform

This repo is not structured as a separate React frontend + Express backend. If you want a separate Render service, it would require a code refactor to move API routes out of the app before deployment.

## Required production env vars

Set these values in Vercel project settings (or in a local `.env.production` file for testing):

```env
NODE_ENV=production
PORT=3000
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/kayden
CLIENT_URL=https://your-kayden-domain.vercel.app
NEXT_PUBLIC_API_URL=https://your-kayden-domain.vercel.app
JWT_SECRET=replace-with-a-long-random-secret
```

Notes:
- `MONGODB_URI` must be a live MongoDB Atlas connection string.
- `CLIENT_URL` and `NEXT_PUBLIC_API_URL` should point to the deployed HTTPS domain.
- `JWT_SECRET` should be a random long secret string.

## Deploy to Vercel

1. Push the repo to GitHub.
2. Open Vercel and import the repository.
3. Choose the root folder.
4. Framework preset: Next.js.
5. Add the env vars listed above.
6. Build command: `npm run build`
7. Output directory: default Next.js output
8. Deploy.

After deployment, the app will be available at a Vercel hostname such as:

```text
https://your-project-name.vercel.app
```

## MongoDB Atlas setup

1. Create a MongoDB Atlas account.
2. Create a cluster.
3. Add a database user.
4. Allow network access from anywhere (`0.0.0.0/0`) or whitelist Vercel IP ranges if required.
5. Copy the connection string to `MONGODB_URI`.

## Local validation before deployment

Run:

```bash
npm install
npm run typecheck
npm run lint
npm run build
npm run dev
```

The app should run locally and expose the KAYDEN experience on the local Next.js port (commonly 3000 or the next free port if 3000 is occupied).

## Production-readiness checklist

- [ ] Vercel project is linked to the repo
- [ ] `MONGODB_URI` is set in production
- [ ] `NEXT_PUBLIC_API_URL` points to the public Vercel URL
- [ ] `CLIENT_URL` matches the public Vercel URL
- [ ] `JWT_SECRET` is set and unique
- [ ] Build completes without errors
- [ ] Health endpoint responds successfully on the deployed URL

## Important caveat

Because API routes are embedded inside the Next.js app, this project does not need a separate Render deployment for the app itself. Render would only be relevant if the API is refactored into a separate service.
