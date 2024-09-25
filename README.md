# Using a Separate Content Repo in TinaCloud with a Gatsby project

A default Gatsby project set up with a Separate Content Repository and using TinaCloud.

https://tina.io/docs/guides/separate-content-repo/

1. Clone this repo
2. Fork the content repo https://github.com/tkapa/tina-separate-repo
3. Create a new project at https://app.tina.io
   1. Get your `ClientId` and `Token`
4. Add your `.env`
5. You should now be able to run `npm run build` and see that it is hitting TinaCloud, successfully building.

## **Note:** If you want to run locally, you will need to pull your content repo, and reference it in your `tina/config.ts`

## Visual Editing is not currently available for Gatsby