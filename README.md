# Ray Hamilton Engineering, LLC — Landing Page

Portfolio and marketing site for Ray Hamilton Engineering, LLC — hosted at [rhamiltoneng.com](https://rhamiltoneng.com).

**Live:** https://rhamiltoneng.com/

## Stack

- [Next.js](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com)
- Deployed on AWS S3 + CloudFront via Route 53

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

## Deployment

Pushes to `main` trigger the S3 + CloudFront deploy pipeline. The site is served at `rhamiltoneng.com` (not Vercel).
