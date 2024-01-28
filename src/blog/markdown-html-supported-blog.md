![Deploy a React App to Amazon S3 using Github Actions](/images/blog1-depoy-s3-gitaction.webp)

Deploy a React App to Amazon S3 using Github Actions
====================================================

[#aws](https://dev.to/t/aws)  [#github](https://dev.to/t/github)  [#react](https://dev.to/t/react)  [#tutorial](https://dev.to/t/tutorial)

### Amazon Simple Storage Service (S3)?
Amazon Simple Storage Service (S3) is one of the numerous services offered by Amazon Web Services(AWS), an on-demand cloud computing platform. Amazon S3 provides scalable object storage through a web service interface that is used to store and retrieve any amount of data, at any time, from anywhere on the web.

### Github Actions?
>GitHub Actions makes it easy to automate your workflows like build, test, and deploy when using Github, a platform that provides hosting for software development version control using Git.

In this post, we will go through:

1.  How to create an Amazon S3 bucket.
2.  How to set up an S3 bucket for Web Hosting.
3.  How to configure our Github actions to automatically deploy changes to the S3 bucket. In the end, deploy a React App to live.

Before we get started, you need to have:

1.  A Github account.
2.  An AWS Account

This exercise can be accommodated within the `AWS Free Tier`

### [](https://dev.to/nobleobioma/deploy-a-react-app-to-amazon-s3-using-github-actions-51e#create-amazon-s3-bucket)Create Amazon S3 Bucket

First, log in to your AWS account. On the AWS Management Console, click `S3` from the list of services under the `Storage` section or use the search bar.
[![Select S3](https://res.cloudinary.com/practicaldev/image/fetch/s--rbreEGEb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/d7b0rcv06bwycoaezmjf.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--rbreEGEb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/d7b0rcv06bwycoaezmjf.png)

On the `Amazon S3` page, click on `Create Bucket`
[![Create bucket](https://res.cloudinary.com/practicaldev/image/fetch/s--u3IE83IC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/afrzm1rrbycyt9mwvibz.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--u3IE83IC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/afrzm1rrbycyt9mwvibz.png)

To create a bucket, provide a `Bucket Name`. An `S3` bucket name must be unique amid all buckets universally in Amazon S3. Also, take note of the `Region` you are creating the bucket in. For this post, we are using `US East (N. Virginia)` which is `us-east-1`.
[![Create bucket](https://res.cloudinary.com/practicaldev/image/fetch/s--dgRZPJWN--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/djtzbefd55tf1fizktvs.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--dgRZPJWN--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/djtzbefd55tf1fizktvs.png)

Uncheck the checkbox for `Block all public access`. After, click on `Next` and `Review` bucket configurations. Then click `Create bucket`.

[![Allow Access](https://res.cloudinary.com/practicaldev/image/fetch/s--PZWzl3I2--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/befqy9f2bpsmorjreghc.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--PZWzl3I2--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/befqy9f2bpsmorjreghc.png)

#### [](https://dev.to/nobleobioma/deploy-a-react-app-to-amazon-s3-using-github-actions-51e#add-bucket-policy)Add Bucket Policy

This makes the contents of your bucket publicly available. This action is not recommended when working with `S3` buckets, but for this our purpose this is fine.

Under Buckets, choose the name of your bucket`(s3-github-actions)` > Choose `Permissions` > Choose `Bucket Policy`.

Copy the following bucket policy, and paste it in the editor.

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::<bucket-name>/*"
            ]
        }
    ]
}

```

Update the snippet to include your bucket name. In the bucket policy, `<bucket-name>` you must update this name to match your bucket name.\
Then, click on `Save`.

#### [](https://dev.to/nobleobioma/deploy-a-react-app-to-amazon-s3-using-github-actions-51e#enable-static-website-hosting)Enable Static Website Hosting

Click `Use this bucket to host a website`.\
[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--zV8dnr6d--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/qapfw596z8r69nokm6iu.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--zV8dnr6d--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/qapfw596z8r69nokm6iu.png)

Type `index.html` in the `Index document` field and `Save`.\
[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--RWFHci8O--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/kzatc19pun4xz2tdaxd3.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--RWFHci8O--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/kzatc19pun4xz2tdaxd3.png)

Note: Take note of the Endpoint URL, our website will be accessible in the browser using this URL.

#### [](https://dev.to/nobleobioma/deploy-a-react-app-to-amazon-s3-using-github-actions-51e#create-and-push-react-app-to-github)Create and Push React App to GitHub

Now we have our S3 bucket, it's time to create and push our React App to GitHub.

-   First, create a `New Repository` on GitHub.

After creating a repository, You could:

-   Create a React application using [Create React App](https://create-react-app.dev/) or [Parcel-Bundler](https://parceljs.org/getting_started.html) and ensure that there is a build script in the `package.json` file will output to a `dist` folder.

```
  $ git init # initialize git locally
  $ git add . # add changes to git
  $ git commit -m "React App" # commit changes
  $ git remote add origin <your-github-repo-url.git> # add remote origin
  $ git push -u origin master # push to remote master branch

```

```
                                          OR

```

-   Clone the sample React App repository `S3-Github Actions React App` that we will be using for this post and add your repository's `remote` URL. [GitHub Repo - S3-Github Actions React App](https://github.com/nobioma1/s3-github-actions)

To add new remote (this will add a new remote called `actions`):

```
  $ git remote add actions <your-github-repo-url.git> # add remote actions
  $ git push -u actions master # push to remote master branch

```

To set up our workflow, we need to provide the `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` and `AWS_REGION` of the `S3` bucket in other to connect successfully to Amazon S3.

#### [](https://dev.to/nobleobioma/deploy-a-react-app-to-amazon-s3-using-github-actions-51e#get-aws-authorization)Get AWS Authorization

On the AWS Console:

1.  Click on `IAM` under the `Security, Identity, & Compliance` section.
2.  Click on `Users` and select your preferred user.
3.  Under `Security Credentials`, click on `Create Access Key`. This will create an `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`, copy these values. You can also manage key access by either deleting or making it inactive.

Even with a confidante, you do not ever what to share your access keys. Your confidante might have a confidante. Who knows! 🤷🏻‍♂️.

So that's why we will be passing some very important values as `Secrets` on GitHub then later access them in the workflow file using the expression syntax. `${{ <expression> }}`

#### [](https://dev.to/nobleobioma/deploy-a-react-app-to-amazon-s3-using-github-actions-51e#back-to-github)Back to Github

Click on the `Settings` tab, Select `Secret` on the left menu, then click on `New Secret` to add a secret providing the `Name` and `Value`.

| Name | Value |
| --- | --- |
| AWS_ACCESS_KEY_ID | your-aws-access-key-id |
| AWS_SECRET_ACCESS_KEY | your-aws-secret-access-key |
| AWS_REGION | `us-east-1` or your-aws-s3-region |


[![secrets](https://res.cloudinary.com/practicaldev/image/fetch/s--Makdiljj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/ql9mgibbrjrm8n4x7a61.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--Makdiljj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/ql9mgibbrjrm8n4x7a61.png)

### [](https://dev.to/nobleobioma/deploy-a-react-app-to-amazon-s3-using-github-actions-51e#setup-github-actions)Setup Github Actions

Now, we have the `S3` bucket set up and a React app to deploy.

On the GitHub repository, click on the `Actions` tab to open the Github actions page. On the `Actions` page, click on the `Set up this workflow` or `set up a workflow yourself ->` button, this will redirect to a new page with a web editor containing some boilerplate code but we will get rid of that.

[![Click on Actions and Setup this workflow](https://res.cloudinary.com/practicaldev/image/fetch/s--zV0MAwff--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/tqwzjvoenbv5gw4mmjmp.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--zV0MAwff--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/tqwzjvoenbv5gw4mmjmp.png)

First, let's name the workflow file. Change `blank.yml` to `s3-depl`. You can leave the filename as `blank.yml`, but it is best to give it a descriptive name.

[![name file](https://res.cloudinary.com/practicaldev/image/fetch/s--9m6wOu0I--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1s8uph4lo73n2etfuzzs.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--9m6wOu0I--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1s8uph4lo73n2etfuzzs.png)

Copy and paste the code snippet into the editor. Copy and Paste, a developer's superpower 🦸🏻‍♂️🦸🏻‍♀️.

```
name: s3-depl

on:
  push:
    branches:
      - master

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ secrets.AWS_REGION }}
      - name: Build React App
        run: npm install && npm run build
      - name: Deploy app build to S3 bucket
        run: aws s3 sync ./dist/ s3://<bucket-name> --delete

```

Mehhnnn! So many lines!!🥶
Now, let's breakdown the code snippet above.

-   `name`: We define the name of this action. This will be used to identify the action amid may others you may have.

-   `on`: We define trigger with `on` : `push` also the branch. This workflow will run anytime you `push` code to the `master` branch.

-   `jobs`: Workflow run is made up of one or more jobs and they run in parallel by default.

    -   `steps`: A job contains a sequence of tasks called steps. Steps can run commands, run setup tasks, or run action in your repository and each step starts either with a `uses:` or a `name:`.
    -   actions/checkout@v2: This action checks-out your repository, so your workflow can access it.
    -   aws-actions/configure-aws-credentials@v1: This configures AWS credentials and region environment variables for use in other GitHub Actions.
    -   Build React App: This step block installs the node packages and runs the `build` in the `package.json` file, which creates a `dist` folder in the root directory.
    -   Deploy app build to S3 bucket: This deploys the newly created build to `S3` bucket `<bucket-name>` (replace `<bucket-name>` with the name of your `S3` bucket. Mine is `s3-github-actions`).

To save, click on the `Start Commit` then `Commit New File`. This will,

-   save the action, creating a `.github` directory with a `workflows` directory in it that contains the new file `s3-depl`(the file name you used earlier)
-   Trigger the action.

To check the progress, click on the `Actions` tab.\
[![success](https://res.cloudinary.com/practicaldev/image/fetch/s--HFVJg6dm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/ajksoidlncd3fumd3rqe.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--HFVJg6dm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/ajksoidlncd3fumd3rqe.png)

Voila!! The action ran successfully. Yay! Party After Party!! 🎊

You can now check your `S3` bucket, you would see that the build files have been uploaded to it.

[![s3 update](https://res.cloudinary.com/practicaldev/image/fetch/s--6rfH-j_j--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/ddzejd9f27qzclxhs08h.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--6rfH-j_j--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/ddzejd9f27qzclxhs08h.png)

Our site is now live!!! On the browser, go to the `Endpoint` URL `(http://<s3-bucket>.s3-website-<s3-region>.amazonaws.com)` that we came across when enabling `Static Website Hosting`. Now, any change you make to your react app will build and upload to your `S3` bucket which will update live.\
[![Live app](/images/blog1-biruk-portfolio.png)

You can go on to work with Github Actions by triggering an action on `Pull Request` that might run some CI tests and perform several steps before deploying to your `S3`.

Thank you. 🎊
