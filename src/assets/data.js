export const columns = [
    {
        display: 'sl',
        data: 'index',
    },
    {
        display: 'Profile',
        data: 'pic',
        render: (data) => {
            return '<img src="' + data + '"></img>'
        },
    },
    {
        display: 'Name',
        data: 'full_name',
    },
    {
        display: 'Email',
        data: 'email',
    },
    {
        display: 'Phone',
        data: 'phone',
    },
    {
        display: 'Dob',
        data: 'last_login.ext.date_time',
    },
    {
        display: 'Action',
        data: 'index',
        render: (data) => {
            return '<a href="'+data+'" class="btn btn-sm btn-primary">view</a>' +
                '<a href="' + data + '" class="btn btn-sm btn-info">edit</a>' +
                '<a href="' + data + '" class="btn btn-sm btn-danger">delete</a>';
        }
    },
];

export const data = [
    {
        "pic": "https://via.placeholder.com/150",
        "phone": "1-132-481-1427",
        "last_login": {
            "ip4": "137.56.117.186",
            "ext": {
                "date_time": "Fri Sep 16 05:51:41 UTC 1966"
            }
        },
        "index": 867,
        "gender": "male",
        "full_name": "fisty-feather",
        "email": "quam_amelie@outlook.com"
    },
    {
        "pic": "https://via.placeholder.com/150",
        "phone": "1-539-665-6076",
        "last_login": {
            "ip4": "137.56.117.186",
            "ext": {
                "date_time": "Fri Sep 16 05:51:41 UTC 1966"
            }
        },
        "index": 795,
        "gender": "female",
        "full_name": "wandering-meadow",
        "email": "sint0@yahoo.com"
    },
    {
        "pic": "https://via.placeholder.com/150",
        "phone": "1-567-588-6036",
        "last_login": {
            "ip4": "137.56.117.186",
            "ext": {
                "date_time": "Fri Sep 16 05:51:41 UTC 1966"
            }
        },
        "index": 959,
        "gender": "male",
        "full_name": "snowy.glitter",
        "email": "top@hotmail.com"
    },
    {
        "pic": "https://via.placeholder.com/150",
        "phone": "(733) 693-8040",
        "last_login": {
            "ip4": "137.56.117.186",
            "ext": {
                "date_time": "Fri Sep 16 05:51:41 UTC 1966"
            }
        },
        "index": 848,
        "gender": "female",
        "full_name": "twilight.sea",
        "email": "war_asa@gmail.com"
    },
    {
        "pic": "https://via.placeholder.com/150",
        "phone": "1-089-468-0204",
        "last_login": {
            "ip4": "137.56.117.186",
            "ext": {
                "date_time": "Fri Sep 16 05:51:41 UTC 1966"
            }
        },
        "index": 466,
        "gender": "female",
        "full_name": "richy.frost",
        "email": "silent@hotmail.com"
    },
    {
        "pic": "https://via.placeholder.com/150",
        "phone": "692.366.6746",
        "last_login": {
            "ip4": "137.56.117.186",
            "ext": {
                "date_time": "Fri Sep 16 05:51:41 UTC 1966"
            }
        },
        "index": 402,
        "gender": "male",
        "full_name": "hilarious-butterfly-17",
        "email": "bernice@yahoo.com"
    },
    {
        "pic": "https://via.placeholder.com/150",
        "phone": "1-832-113-2298",
        "last_login": {
            "ip4": "137.56.117.186",
            "ext": {
                "date_time": "Fri Sep 16 05:51:41 UTC 1966"
            }
        },
        "index": 706,
        "gender": "male",
        "full_name": "throbbing.voice",
        "email": "maiya@outlook.com"
    },
    {
        "pic": "https://via.placeholder.com/150",
        "phone": "346-549-7987",
        "last_login": {
            "ip4": "137.56.117.186",
            "ext": {
                "date_time": "Fri Sep 16 05:51:41 UTC 1966"
            }
        },
        "index": 737,
        "gender": "female",
        "full_name": "alpha.wildflower.87",
        "email": "new_omari@gmail.com"
    },
    {
        "pic": "https://via.placeholder.com/150",
        "phone": "(110) 756-6085",
        "last_login": {
            "ip4": "137.56.117.186",
            "ext": {
                "date_time": "Fri Sep 16 05:51:41 UTC 1966"
            }
        },
        "index": 669,
        "gender": "female",
        "full_name": "heavy-night",
        "email": "soldier24@hotmail.com"
    },
    {
        "pic": "https://via.placeholder.com/150",
        "phone": "157.445.9469",
        "last_login": {
            "ip4": "137.56.117.186",
            "ext": {
                "date_time": "Fri Sep 16 05:51:41 UTC 1966"
            }
        },
        "index": 224,
        "gender": "male",
        "full_name": "chaos.snow.15",
        "email": "spend33@outlook.com"
    }
]