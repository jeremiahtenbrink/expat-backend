define({ "api": [
  {
    "type": "post",
    "url": "/comments",
    "title": "Create a comment.",
    "version": "1.0.0",
    "name": "CreateComment",
    "group": "Comments",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>The token given to the user at login.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Post comment example:",
        "content": "const instance = axios.create({\n        baseURL: 'http://localhost:3200',\n        timeout: 1000,\n        headers: {\n            authorization: \"userTokenGoesHere\"\n        }\n    });\n \n instance.post(\"/comments\", {\n    comment: \"Long string\",\n    post_id: 45,\n });",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Text",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment to add to post.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "post_id",
            "description": "<p>Id of the post to add the comment to.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "created_at",
            "description": "<p>Id of the post to add the comment to.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "updated_at",
            "description": "<p>Id of the post to add the comment to.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "likes",
            "description": "<p>Number of likes the comment has.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Create post success.",
          "content": "{\n    \"id\": 5876,\n    \"created_at\": \"2019-04-15 01:41:41\",\n    \"updated_at\": \"2019-04-15 01:41:41\",\n    \"comment\": \"Some text here\",\n    \"likes\": 0,\n    \"user_id\": 101,\n    \"post_id\": 45\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/comments/commentsRouter.js",
    "groupTitle": "Comments",
    "sampleRequest": [
      {
        "url": "https://expat-backend.herokuapp.com/comments"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/comments/post_id/:id",
    "title": "Get all comments for a post.",
    "version": "1.0.0",
    "name": "GetPostComments",
    "group": "Comments",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>The token given to the user at login.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the post you are collecting comments for.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Get comments example:",
        "content": "const instance = axios.create({\n        baseURL: 'http://localhost:3200',\n        timeout: 1000,\n        headers: {\n            authorization: \"userTokenGoesHere\"\n        }\n    });\n \n instance.get(\"/comments/post_id/45\");",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Posts Data",
          "content": "[\n {\n        \"id\": 273,\n        \"created_at\": \"2019-04-14 18:00:08\",\n        \"updated_at\": \"2019-04-15 01:38:18\",\n        \"comment\": \"Autem doloremque est quia sed sequi cumque dolor quaerat recusandae. Autem quia quasi qui in quisquam occaecati exercitationem. Dignissimos ea placeat iusto cumque dolores numquam quidem. Quis quia veritatis odit sed.\",\n        \"likes\": 0,\n        \"user_id\": 30,\n        \"post_id\": 45,\n        \"user_name\": \"Ellen91\"\n    },\n {\n        \"id\": 274,\n        \"created_at\": \"2019-04-14 18:27:45\",\n        \"updated_at\": \"2019-04-15 01:38:18\",\n        \"comment\": \"Labore voluptatibus sed asperiores mollitia adipisci doloremque quo. Deleniti itaque voluptatem asperiores rerum sit nemo vitae consequuntur.\",\n        \"likes\": 0,\n        \"user_id\": 95,\n        \"post_id\": 45,\n        \"user_name\": \"Alvena44\"\n    }....\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/comments/commentsRouter.js",
    "groupTitle": "Comments",
    "sampleRequest": [
      {
        "url": "https://expat-backend.herokuapp.com/comments/post_id/:id"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/comments",
    "title": "Update a comment.",
    "version": "1.0.0",
    "name": "UpdateComment",
    "group": "Comments",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>The token given to the user at login.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Post comment example:",
        "content": "const instance = axios.create({\n        baseURL: 'http://localhost:3200',\n        timeout: 1000,\n        headers: {\n            authorization: \"userTokenGoesHere\"\n        }\n    });\n \n instance.put(\"/comments\", {\n    id: 273,\n    likes: 20\n });",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Post id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "post_id",
            "description": "<p>Id of the post to add the comment to.</p>"
          },
          {
            "group": "Parameter",
            "type": "Text",
            "optional": true,
            "field": "comment",
            "description": "<p>Comment to add to post.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "created_at",
            "description": "<p>Id of the post to add the comment to.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "updated_at",
            "description": "<p>Id of the post to add the comment to.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "likes",
            "description": "<p>Number of likes the comment has.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Create post success.",
          "content": "{\n    \"id\": 273,\n    \"created_at\": \"2019-04-14 18:00:08\",\n    \"updated_at\": \"2019-04-15 01:38:18\",\n    \"comment\": \"Autem doloremque est quia sed sequi cumque dolor quaerat recusandae. Autem quia quasi qui in quisquam occaecati exercitationem. Dignissimos ea placeat iusto cumque dolores numquam quidem. Quis quia veritatis odit sed.\",\n    \"likes\": 20,\n    \"user_id\": 101,\n    \"post_id\": 45\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/comments/commentsRouter.js",
    "groupTitle": "Comments",
    "sampleRequest": [
      {
        "url": "https://expat-backend.herokuapp.com/comments"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/posts/",
    "title": "Create a post",
    "version": "1.0.0",
    "name": "CreatePost",
    "group": "Posts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>The token given to the user at login.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The title of the post.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Short description of the post.</p>"
          },
          {
            "group": "Parameter",
            "type": "Text",
            "optional": false,
            "field": "story",
            "description": "<p>The story of the post.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img_url",
            "description": "<p>The picture url.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "likes",
            "description": "<p>Number of times the post has been liked.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user_profile_img",
            "description": "<p>The users profile image url.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "created_at",
            "description": "<p>Time and date the post was created.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "updated_at",
            "description": "<p>Time and date the post was updated.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Create post example:",
        "content": "const instance = axios.create({\n        baseURL: 'http://localhost:3200',\n        timeout: 1000,\n        headers: {\n            authorization: \"userTokenGoesHere\"\n        }\n    });\n \n instance.post(\"/posts\", {\n    title: \"Some Title\",\n    description: \"Some description\",\n    story: \"Lots of text here.\",\n    img_url: \"http://SomeUrl.something\",\n });",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Posts Data",
          "content": "\n {\n    \"id\": 979,\n    \"created_at\": \"2019-04-15 01:35:35\",\n    \"updated_at\": \"2019-04-15 01:35:35\",\n    \"user_id\": 101,\n    \"title\": \"Some title\",\n    \"description\": \"Some description\",\n    \"story\": \"la la la lahahahah\",\n    \"likes\": 0,\n    \"img_url\": \"http://someUrl.com\",\n    \"user_profile_img\": null,\n    \"user_name\": \"jeremiah\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/posts/postsRouter.js",
    "groupTitle": "Posts",
    "sampleRequest": [
      {
        "url": "https://expat-backend.herokuapp.com/posts/"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/posts/id/:id",
    "title": "Gets post by id",
    "version": "1.0.0",
    "name": "GetPostById",
    "group": "Posts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>The token given to the user at login.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the post.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request example:",
        "content": "axios.post('/posts/id/5', {\n    headers: {\n        authorization: \"token\"\n    }\n});",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Posts Data",
          "content": "\n {\n    \"id\": 45,\n    \"created_at\": \"2019-04-14 16:29:02\",\n    \"updated_at\": \"2019-04-15 01:19:25\",\n    \"user_id\": 52,\n    \"title\": \"body of water between mountains\",\n    \"description\": \"Nostrum sapiente ipsum hic nemo sit exercitationem architecto iure animi.\",\n    \"story\": \"Sint porro quis. Perferendis alias et tenetur. Amet nobis totam doloribus dolorem magni velit reiciendis. Fuga rerum accusamus. Et pariatur quae ut eligendi provident et placeat odio qui.\\n \\rDicta harum ut iure temporibus. Explicabo ea alias cum impedit esse praesentium sed enim blanditiis. Quas nisi voluptatibus dolores ipsum dignissimos. Est asperiores modi tempora. Sint quo officiis mollitia maiores totam dolorem autem ipsam deleniti. Et qui at vel animi minima.\\n \\rUt voluptatem doloremque voluptatem unde voluptas aut necessitatibus exercitationem tempora. Quam officiis corrupti qui atque quidem sint perspiciatis sed. Molestiae est modi rem dicta non. Voluptas sint consequuntur consequuntur autem. Enim est tempora esse error ut quas deserunt explicabo. Ut accusantium est optio in et dolorem vel cupiditate.\",\n    \"likes\": 0,\n    \"img_url\": \"https://images.unsplash.com/photo-1445217143695-467124038776?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU2NzU3fQ\",\n    \"user_profile_img\": null,\n    \"user_name\": \"Norris.Halvorson81\",\n    \"comments\": [\n        {\n            \"id\": 268,\n            \"created_at\": \"2019-04-14 00:50:05\",\n            \"updated_at\": \"2019-04-15 01:19:26\",\n            \"comment\": \"Dolor rerum eaque dolore praesentium non dolores. Aspernatur sed sit dolorem cumque omnis exercitationem iure quibusdam eum. Animi enim assumenda porro et aut enim non. Consequatur aut quisquam repellat.\",\n            \"user_id\": 74,\n            \"post_id\": 45,\n            \"user_name\": \"Ocie_Gusikowski\"\n        }...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/posts/postsRouter.js",
    "groupTitle": "Posts",
    "sampleRequest": [
      {
        "url": "https://expat-backend.herokuapp.com/posts/id/:id"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/posts/:offset",
    "title": "Gets posts ordered by updated_at",
    "version": "1.0.0",
    "name": "GetPosts",
    "group": "Posts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>The token given to the user at login.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>The number to start the posts at.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request example:",
        "content": "axios.post('/posts/20', {\n    headers: {\n        authorization: \"token\"\n    }\n});",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Posts Data",
          "content": "[\n {\n        \"id\": 1,\n        \"created_at\": \"2019-04-14 19:01:18\",\n        \"updated_at\": \"2019-04-15 01:19:25\",\n        \"user_id\": 38,\n        \"title\": \"mountain peak during golden hour\",\n        \"description\": \"Et molestias recusandae consectetur soluta.\",\n        \"story\": \"Ut et quia nam eum sed ratione. Reprehenderit vel quia dolores rem harum voluptas praesentium. Veritatis distinctio et ut voluptas ipsa qui. Aut quo perspiciatis.\\n \\rNobis qui quaerat enim. Reprehenderit recusandae alias blanditiis doloribus quisquam nemo delectus. Et et provident. Mollitia rerum et sint error consequatur ducimus beatae est numquam. Vel culpa nemo accusantium laborum neque sunt. Quod quo excepturi aut sapiente debitis sed quae repellendus sunt.\\n \\rTempora est exercitationem similique repellat at rerum nihil sequi. Et voluptas esse tenetur quis porro id reiciendis. Voluptas neque culpa. Dignissimos enim ea accusantium iusto reiciendis. Dicta consequuntur ipsam rerum consequatur explicabo.\",\n        \"likes\": 0,\n        \"img_url\": \"https://images.unsplash.com/photo-1528920304568-7aa06b3dda8b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU2NzU3fQ\",\n        \"user_profile_img\": null,\n        \"user_name\": \"Jake.Gorczany95\"\n    }...\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/posts/postsRouter.js",
    "groupTitle": "Posts",
    "sampleRequest": [
      {
        "url": "https://expat-backend.herokuapp.com/posts/:offset"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/posts/",
    "title": "Update a post",
    "version": "1.0.0",
    "name": "UpdatePost",
    "group": "Posts",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>The token given to the user at login.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Post id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>The title of the post.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Short description of the post.</p>"
          },
          {
            "group": "Parameter",
            "type": "Text",
            "optional": true,
            "field": "story",
            "description": "<p>The story of the post.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "img_url",
            "description": "<p>The picture url.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "likes",
            "description": "<p>Number of times the post has been liked.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user_profile_img",
            "description": "<p>The users profile image url.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "created_at",
            "description": "<p>Time and date the post was created.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "updated_at",
            "description": "<p>Time and date the post was updated.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Update post example:",
        "content": "const instance = axios.create({\n        baseURL: 'http://localhost:3200',\n        timeout: 1000,\n        headers: {\n            authorization: \"userTokenGoesHere\"\n        }\n    });\n \n instance.put(\"/posts\", {\n    id: 979,\n    likes: 25\n });",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Update post success",
          "content": "\n {\n    \"id\": 979,\n    \"created_at\": \"2019-04-15 02:09:55\",\n    \"updated_at\": \"2019-04-15 02:09:55\",\n    \"user_id\": 101,\n    \"title\": \"Some title\",\n    \"description\": \"ffnkdl;ahijfkdls;a\",\n    \"story\": \"fjdka;fjdinaklf;dfids;\",\n    \"likes\": 25,\n    \"img_url\": \"https://www.someurl.com\",\n    \"user_profile_img\": null,\n    \"user_name\": \"jeremiah\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/posts/postsRouter.js",
    "groupTitle": "Posts",
    "sampleRequest": [
      {
        "url": "https://expat-backend.herokuapp.com/posts/"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Get a user with the id.",
    "version": "1.0.0",
    "name": "GetUser",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User auth token.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request example:",
        "content": "const request = axios.create({\n    baseURL: 'http://localhost:3200',\n        timeout: 1000,\n        headers: {\n            authorization: \"userTokenGoesHere\"\n        }\n});\nrequest.get('/users/11');",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "User Data",
          "content": "\n{\n       \"id\": 1,\n       \"created_at\": \"2019-04-13 09:01:42\",\n       \"updated_at\": \"2019-04-13 18:54:22\",\n       \"user_name\": \"Constance36\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users/usersRouter.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://expat-backend.herokuapp.com/users/:id"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get all users",
    "version": "1.0.0",
    "name": "GetUsers",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User auth token.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request example:",
        "content": "const request = axios.create({\n    baseURL: 'http://localhost:3200',\n        timeout: 1000,\n        headers: {\n            authorization: \"userTokenGoesHere\"\n        }\n});\nrequest.get('/users');",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Users Data",
          "content": "[\n {\n        \"id\": 1,\n        \"created_at\": \"2019-04-13 09:01:42\",\n        \"updated_at\": \"2019-04-13 18:54:22\",\n        \"user_name\": \"Constance36\"\n    },\n {\n        \"id\": 2,\n        \"created_at\": \"2019-04-13 03:36:08\",\n        \"updated_at\": \"2019-04-13 18:54:22\",\n        \"user_name\": \"Marcellus_Kautzer24\"\n    },...\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users/usersRouter.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://expat-backend.herokuapp.com/users"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "Log a user in.",
    "version": "1.0.0",
    "name": "LoginUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>Users username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users password</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Login example:",
        "content": "axios.post('/users/login', {\n    user_name: \"Constance36\",\n    password: \"password\"\n});",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Login Success",
          "content": "\n {\n    \"message\": \"Welcome jeremiah!\",\n    \"status\": 200,\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAxLCJjcmVhdGVkX2F0IjoiMjAxOS0wNC0xMyAyMzowMDoxNSIsInVwZGF0ZWRfYXQiOiIyMDE5LTA0LTEzIDIzOjAwOjE1IiwidXNlcl9uYW1lIjoiamVyZW1pYWgiLCJpYXQiOjE1NTUxOTY0MzAsImV4cCI6MTU1NTI4MjgzMH0.3dY5x5o-OTRPLJwCc2mYSMzjsfdXomtHWvrc14QUvQ4\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users/usersRouter.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://expat-backend.herokuapp.com/users/login"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users/register",
    "title": "Register a new user.",
    "version": "1.0.0",
    "name": "RegisterUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>Users username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Users password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "created_at",
            "description": "<p>Timestamp the user was created</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "updated_at",
            "description": "<p>Timestamp the user was last updated.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Register example:",
        "content": "axios.post('/users/register', {\n    user_name: \"Constance36\",\n    password: \"password\"\n});",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Register Success",
          "content": "\n{\n       \"id\": 1,\n       \"created_at\": \"2019-04-13 09:01:42\",\n       \"updated_at\": \"2019-04-13 18:54:22\",\n       \"user_name\": \"Constance36\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users/usersRouter.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://expat-backend.herokuapp.com/users/register"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/users",
    "title": "Update user info.",
    "version": "1.0.0",
    "name": "UpdateUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user_name",
            "description": "<p>Users username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>Users password</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>User auth token.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request example:",
        "content": "const request = axios.create({\n    baseURL: 'http://localhost:3200',\n        timeout: 1000,\n        headers: {\n            authorization: \"userTokenGoesHere\"\n        }\n});\nrequest.put('/users');",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Update Success",
          "content": "\n {\n    \"message\": \"Welcome jeremiah!\",\n    \"status\": 200,\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAxLCJjcmVhdGVkX2F0IjoiMjAxOS0wNC0xMyAyMzowMDoxNSIsInVwZGF0ZWRfYXQiOiIyMDE5LTA0LTEzIDIzOjAwOjE1IiwidXNlcl9uYW1lIjoiamVyZW1pYWgiLCJpYXQiOjE1NTUxOTY0MzAsImV4cCI6MTU1NTI4MjgzMH0.3dY5x5o-OTRPLJwCc2mYSMzjsfdXomtHWvrc14QUvQ4\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users/usersRouter.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://expat-backend.herokuapp.com/users"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
