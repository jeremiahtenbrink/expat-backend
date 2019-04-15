# Expat Journal v1.0.0

Api for Expat Journal. A web application for storing and sharing user experiences while traveling.

- [Comments](#comments)
	- [Create a comment.](#create-a-comment.)
	- [Get all comments for a post.](#get-all-comments-for-a-post.)
	- [Update a comment.](#update-a-comment.)
	
- [Posts](#posts)
	- [Create a post](#create-a-post)
	- [Gets post by id](#gets-post-by-id)
	- [Gets posts ordered by updated_at](#gets-posts-ordered-by-updated_at)
	- [Update a post](#update-a-post)
	
- [Users](#users)
	- [Get a user with the id.](#get-a-user-with-the-id.)
	- [Get all users](#get-all-users)
	- [Log a user in.](#log-a-user-in.)
	- [Register a new user.](#register-a-new-user.)
	- [Update user info.](#update-user-info.)
	


# Comments

## Create a comment.



	POST /comments

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization			| String			|  <p>The token given to the user at login.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| comment			| Text			|  <p>Comment to add to post.</p>							|
| post_id			| Number			|  <p>Id of the post to add the comment to.</p>							|
| created_at			| String			| **optional** <p>Id of the post to add the comment to.</p>							|
| updated_at			| String			| **optional** <p>Id of the post to add the comment to.</p>							|
| likes			| Number			| **optional** <p>Number of likes the comment has.</p>							|

### Examples

Post comment example:

```
const instance = axios.create({
        baseURL: 'http://localhost:3200',
        timeout: 1000,
        headers: {
            authorization: "userTokenGoesHere"
        }
    });
 
 instance.post("/comments", {
    comment: "Long string",
    post_id: 45,
 });
```

### Success Response

Create post success.

```
{
    "id": 5876,
    "created_at": "2019-04-15 01:41:41",
    "updated_at": "2019-04-15 01:41:41",
    "comment": "Some text here",
    "likes": 0,
    "user_id": 101,
    "post_id": 45
}
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```
## Get all comments for a post.



	GET /comments/post_id/:id

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization			| String			|  <p>The token given to the user at login.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>The id of the post you are collecting comments for.</p>							|

### Examples

Get comments example:

```
const instance = axios.create({
        baseURL: 'http://localhost:3200',
        timeout: 1000,
        headers: {
            authorization: "userTokenGoesHere"
        }
    });
 
 instance.get("/comments/post_id/45");
```

### Success Response

Posts Data

```
[
 {
        "id": 273,
        "created_at": "2019-04-14 18:00:08",
        "updated_at": "2019-04-15 01:38:18",
        "comment": "Autem doloremque est quia sed sequi cumque dolor quaerat recusandae. Autem quia quasi qui in quisquam occaecati exercitationem. Dignissimos ea placeat iusto cumque dolores numquam quidem. Quis quia veritatis odit sed.",
        "likes": 0,
        "user_id": 30,
        "post_id": 45,
        "user_name": "Ellen91"
    },
 {
        "id": 274,
        "created_at": "2019-04-14 18:27:45",
        "updated_at": "2019-04-15 01:38:18",
        "comment": "Labore voluptatibus sed asperiores mollitia adipisci doloremque quo. Deleniti itaque voluptatem asperiores rerum sit nemo vitae consequuntur.",
        "likes": 0,
        "user_id": 95,
        "post_id": 45,
        "user_name": "Alvena44"
    }....
 ]
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```
## Update a comment.



	PUT /comments

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization			| String			|  <p>The token given to the user at login.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>Post id.</p>							|
| post_id			| Number			| **optional** <p>Id of the post to add the comment to.</p>							|
| comment			| Text			| **optional** <p>Comment to add to post.</p>							|
| created_at			| String			| **optional** <p>Id of the post to add the comment to.</p>							|
| updated_at			| String			| **optional** <p>Id of the post to add the comment to.</p>							|
| likes			| Number			| **optional** <p>Number of likes the comment has.</p>							|

### Examples

Post comment example:

```
const instance = axios.create({
        baseURL: 'http://localhost:3200',
        timeout: 1000,
        headers: {
            authorization: "userTokenGoesHere"
        }
    });
 
 instance.put("/comments", {
    id: 273,
    likes: 20
 });
```

### Success Response

Create post success.

```
{
    "id": 273,
    "created_at": "2019-04-14 18:00:08",
    "updated_at": "2019-04-15 01:38:18",
    "comment": "Autem doloremque est quia sed sequi cumque dolor quaerat recusandae. Autem quia quasi qui in quisquam occaecati exercitationem. Dignissimos ea placeat iusto cumque dolores numquam quidem. Quis quia veritatis odit sed.",
    "likes": 20,
    "user_id": 101,
    "post_id": 45
}
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```
# Posts

## Create a post



	POST /posts/

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization			| String			|  <p>The token given to the user at login.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| title			| String			|  <p>The title of the post.</p>							|
| description			| String			|  <p>Short description of the post.</p>							|
| story			| Text			|  <p>The story of the post.</p>							|
| img_url			| String			|  <p>The picture url.</p>							|
| likes			| Number			| **optional** <p>Number of times the post has been liked.</p>							|
| user_profile_img			| String			| **optional** <p>The users profile image url.</p>							|
| created_at			| String			| **optional** <p>Time and date the post was created.</p>							|
| updated_at			| String			| **optional** <p>Time and date the post was updated.</p>							|

### Examples

Create post example:

```
const instance = axios.create({
        baseURL: 'http://localhost:3200',
        timeout: 1000,
        headers: {
            authorization: "userTokenGoesHere"
        }
    });
 
 instance.post("/posts", {
    title: "Some Title",
    description: "Some description",
    story: "Lots of text here.",
    img_url: "http://SomeUrl.something",
 });
```

### Success Response

Posts Data

```

 {
    "id": 979,
    "created_at": "2019-04-15 01:35:35",
    "updated_at": "2019-04-15 01:35:35",
    "user_id": 101,
    "title": "Some title",
    "description": "Some description",
    "story": "la la la lahahahah",
    "likes": 0,
    "img_url": "http://someUrl.com",
    "user_profile_img": null,
    "user_name": "jeremiah"
}
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```
## Gets post by id



	GET /posts/id/:id

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization			| String			|  <p>The token given to the user at login.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>The id of the post.</p>							|

### Examples

Request example:

```
axios.post('/posts/id/5', {
    headers: {
        authorization: "token"
    }
});
```

### Success Response

Posts Data

```

 {
    "id": 45,
    "created_at": "2019-04-14 16:29:02",
    "updated_at": "2019-04-15 01:19:25",
    "user_id": 52,
    "title": "body of water between mountains",
    "description": "Nostrum sapiente ipsum hic nemo sit exercitationem architecto iure animi.",
    "story": "Sint porro quis. Perferendis alias et tenetur. Amet nobis totam doloribus dolorem magni velit reiciendis. Fuga rerum accusamus. Et pariatur quae ut eligendi provident et placeat odio qui.\n \rDicta harum ut iure temporibus. Explicabo ea alias cum impedit esse praesentium sed enim blanditiis. Quas nisi voluptatibus dolores ipsum dignissimos. Est asperiores modi tempora. Sint quo officiis mollitia maiores totam dolorem autem ipsam deleniti. Et qui at vel animi minima.\n \rUt voluptatem doloremque voluptatem unde voluptas aut necessitatibus exercitationem tempora. Quam officiis corrupti qui atque quidem sint perspiciatis sed. Molestiae est modi rem dicta non. Voluptas sint consequuntur consequuntur autem. Enim est tempora esse error ut quas deserunt explicabo. Ut accusantium est optio in et dolorem vel cupiditate.",
    "likes": 0,
    "img_url": "https://images.unsplash.com/photo-1445217143695-467124038776?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU2NzU3fQ",
    "user_profile_img": null,
    "user_name": "Norris.Halvorson81",
    "comments": [
        {
            "id": 268,
            "created_at": "2019-04-14 00:50:05",
            "updated_at": "2019-04-15 01:19:26",
            "comment": "Dolor rerum eaque dolore praesentium non dolores. Aspernatur sed sit dolorem cumque omnis exercitationem iure quibusdam eum. Animi enim assumenda porro et aut enim non. Consequatur aut quisquam repellat.",
            "user_id": 74,
            "post_id": 45,
            "user_name": "Ocie_Gusikowski"
        }...
    ]
}
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```
## Gets posts ordered by updated_at



	GET /posts/:offset

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization			| String			|  <p>The token given to the user at login.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| offset			| Number			|  <p>The number to start the posts at.</p>							|

### Examples

Request example:

```
axios.post('/posts/20', {
    headers: {
        authorization: "token"
    }
});
```

### Success Response

Posts Data

```
[
 {
        "id": 1,
        "created_at": "2019-04-14 19:01:18",
        "updated_at": "2019-04-15 01:19:25",
        "user_id": 38,
        "title": "mountain peak during golden hour",
        "description": "Et molestias recusandae consectetur soluta.",
        "story": "Ut et quia nam eum sed ratione. Reprehenderit vel quia dolores rem harum voluptas praesentium. Veritatis distinctio et ut voluptas ipsa qui. Aut quo perspiciatis.\n \rNobis qui quaerat enim. Reprehenderit recusandae alias blanditiis doloribus quisquam nemo delectus. Et et provident. Mollitia rerum et sint error consequatur ducimus beatae est numquam. Vel culpa nemo accusantium laborum neque sunt. Quod quo excepturi aut sapiente debitis sed quae repellendus sunt.\n \rTempora est exercitationem similique repellat at rerum nihil sequi. Et voluptas esse tenetur quis porro id reiciendis. Voluptas neque culpa. Dignissimos enim ea accusantium iusto reiciendis. Dicta consequuntur ipsam rerum consequatur explicabo.",
        "likes": 0,
        "img_url": "https://images.unsplash.com/photo-1528920304568-7aa06b3dda8b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU2NzU3fQ",
        "user_profile_img": null,
        "user_name": "Jake.Gorczany95"
    }...
 ]
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```
## Update a post



	PUT /posts/

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization			| String			|  <p>The token given to the user at login.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>Post id.</p>							|
| title			| String			| **optional** <p>The title of the post.</p>							|
| description			| String			| **optional** <p>Short description of the post.</p>							|
| story			| Text			| **optional** <p>The story of the post.</p>							|
| img_url			| String			| **optional** <p>The picture url.</p>							|
| likes			| Number			| **optional** <p>Number of times the post has been liked.</p>							|
| user_profile_img			| String			| **optional** <p>The users profile image url.</p>							|
| created_at			| String			| **optional** <p>Time and date the post was created.</p>							|
| updated_at			| String			| **optional** <p>Time and date the post was updated.</p>							|

### Examples

Update post example:

```
const instance = axios.create({
        baseURL: 'http://localhost:3200',
        timeout: 1000,
        headers: {
            authorization: "userTokenGoesHere"
        }
    });
 
 instance.put("/posts", {
    id: 979,
    likes: 25
 });
```

### Success Response

Update post success

```

 {
    "id": 979,
    "created_at": "2019-04-15 02:09:55",
    "updated_at": "2019-04-15 02:09:55",
    "user_id": 101,
    "title": "Some title",
    "description": "ffnkdl;ahijfkdls;a",
    "story": "fjdka;fjdinaklf;dfids;",
    "likes": 25,
    "img_url": "https://www.someurl.com",
    "user_profile_img": null,
    "user_name": "jeremiah"
}
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```
# Users

## Get a user with the id.



	GET /users/:id

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization			| String			|  <p>User auth token.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>User id.</p>							|

### Examples

Request example:

```
const request = axios.create({
    baseURL: 'http://localhost:3200',
        timeout: 1000,
        headers: {
            authorization: "userTokenGoesHere"
        }
});
request.get('/users/11');
```

### Success Response

User Data

```

{
       "id": 1,
       "created_at": "2019-04-13 09:01:42",
       "updated_at": "2019-04-13 18:54:22",
       "user_name": "Constance36"
   }
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```
## Get all users



	GET /users

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization			| String			|  <p>User auth token.</p>							|

### Examples

Request example:

```
const request = axios.create({
    baseURL: 'http://localhost:3200',
        timeout: 1000,
        headers: {
            authorization: "userTokenGoesHere"
        }
});
request.get('/users');
```

### Success Response

Users Data

```
[
 {
        "id": 1,
        "created_at": "2019-04-13 09:01:42",
        "updated_at": "2019-04-13 18:54:22",
        "user_name": "Constance36"
    },
 {
        "id": 2,
        "created_at": "2019-04-13 03:36:08",
        "updated_at": "2019-04-13 18:54:22",
        "user_name": "Marcellus_Kautzer24"
    },...
 ]
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```
## Log a user in.



	POST /users/login


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| user_name			| String			|  <p>Users username</p>							|
| password			| String			|  <p>Users password</p>							|

### Examples

Login example:

```
axios.post('/users/login', {
    user_name: "Constance36",
    password: "password"
});
```

### Success Response

Login Success

```

 {
    "message": "Welcome jeremiah!",
    "status": 200,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAxLCJjcmVhdGVkX2F0IjoiMjAxOS0wNC0xMyAyMzowMDoxNSIsInVwZGF0ZWRfYXQiOiIyMDE5LTA0LTEzIDIzOjAwOjE1IiwidXNlcl9uYW1lIjoiamVyZW1pYWgiLCJpYXQiOjE1NTUxOTY0MzAsImV4cCI6MTU1NTI4MjgzMH0.3dY5x5o-OTRPLJwCc2mYSMzjsfdXomtHWvrc14QUvQ4"
}
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```
## Register a new user.



	POST /users/register


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| user_name			| String			|  <p>Users username</p>							|
| password			| String			|  <p>Users password</p>							|
| created_at			| String			| **optional** <p>Timestamp the user was created</p>							|
| updated_at			| String			| **optional** <p>Timestamp the user was last updated.</p>							|

### Examples

Register example:

```
axios.post('/users/register', {
    user_name: "Constance36",
    password: "password"
});
```

### Success Response

Register Success

```

{
       "id": 1,
       "created_at": "2019-04-13 09:01:42",
       "updated_at": "2019-04-13 18:54:22",
       "user_name": "Constance36"
   }
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```
## Update user info.



	PUT /users

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization			| String			|  <p>User auth token.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>User id.</p>							|
| user_name			| String			| **optional** <p>Users username</p>							|
| password			| String			| **optional** <p>Users password</p>							|

### Examples

Request example:

```
const request = axios.create({
    baseURL: 'http://localhost:3200',
        timeout: 1000,
        headers: {
            authorization: "userTokenGoesHere"
        }
});
request.put('/users');
```

### Success Response

Update Success

```

 {
    "message": "Welcome jeremiah!",
    "status": 200,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAxLCJjcmVhdGVkX2F0IjoiMjAxOS0wNC0xMyAyMzowMDoxNSIsInVwZGF0ZWRfYXQiOiIyMDE5LTA0LTEzIDIzOjAwOjE1IiwidXNlcl9uYW1lIjoiamVyZW1pYWgiLCJpYXQiOjE1NTUxOTY0MzAsImV4cCI6MTU1NTI4MjgzMH0.3dY5x5o-OTRPLJwCc2mYSMzjsfdXomtHWvrc14QUvQ4"
}
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```

