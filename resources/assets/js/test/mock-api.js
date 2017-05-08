/**
 * Created by jerezb on 2017-02-24.
 */
let Settings = {
    delay: 0
};

export default {

    // Get api token
    ['POST */login'] (pathMatch, query, request) {
        // before respond, you can check the path and query parameters with `pathMatch` & `query`
        // powered by 'url-pattern' & 'qs'
        // https://www.npmjs.com/package/url-pattern
        // https://www.npmjs.com/package/qs
        let body = {
            // data: {
            api_token: 'test',
            redirect_to: null,
            ignore_redirect: true

            // }
        };
        return {
            body: body,
            status: 200,
            statusText: 'OK',
            headers: {/*headers*/},
            delay: Settings.delay, // millisecond
        }
    },

    // basic mock
    ['GET *users/me'] (pathMatch, query, request) {
        let obj = {
            zip: "90344",
            country_code: "la",
            email: "admin@admin.com",
            alt_email: null,
            created_at: "2017-02-20 22:00:08",
            banner: "https://missions.dev/api/images/banners/gen-ban-2-2560x800.jpg",
            birthday: "1978-12-30",
            avatar: "https://missions.dev/api/images/avatars/112d15e5-c447-4c9e-bf25-b4cdb450c6a2_1487658721.jpg",
            bio: "test",
            country_name: "Lao, People's Democratic Republic",
            city: "Port Loraine",
            phone_one: null,
            id: "112d15e5-c447-4c9e-bf25-b4cdb450c6a2",
            gender: "Male",
            public: false,
            state: "Idaho",
            phone_two: null,
            name: "Administrator",
            links: [
                {
                    rel: "self",
                    uri: "/users/112d15e5-c447-4c9e-bf25-b4cdb450c6a2"
                }
            ],
            password: "$2y$10$qBd9LjcDtM4MZlAvgIR9H.43NiD0OPPVpvSiE/YaOLqqBvk2kCSpO",
            status: "Married",
            street: "7872 Lang Wall",
            timezone: "Asia/Kolkata",
            updated_at: "2017-02-24 01:11:05",
            url: "administrator",
        };

        if (query.hasOwnProperty('include')) {
            let params = query.include.split(',');
            if (params.includes('abilities')) {
                obj.abilities = {
                    "data": [{
                        "id": 1,
                        "display_name": "Access Dashboard",
                        "name": "access-dashboard",
                        "slug": "access-dashboard",
                        "entity_id": null,
                        "entity_type": null
                    }, {
                        "id": 2,
                        "display_name": "Access Admin",
                        "name": "access-admin",
                        "slug": "access-admin",
                        "entity_id": null,
                        "entity_type": null
                    }, {
                        "id": 3,
                        "display_name": "View Users",
                        "name": "view",
                        "slug": "view-users",
                        "entity_id": null,
                        "entity_type": "users"
                    }, {
                        "id": 4,
                        "display_name": "Create Users",
                        "name": "create",
                        "slug": "create-users",
                        "entity_id": null,
                        "entity_type": "users"
                    }, {
                        "id": 5,
                        "display_name": "Edit Users",
                        "name": "edit",
                        "slug": "edit-users",
                        "entity_id": null,
                        "entity_type": "users"
                    }, {
                        "id": 6,
                        "display_name": "Delete Users",
                        "name": "delete",
                        "slug": "delete-users",
                        "entity_id": null,
                        "entity_type": "users"
                    }, {
                        "id": 7,
                        "display_name": "View Groups",
                        "name": "view",
                        "slug": "view-groups",
                        "entity_id": null,
                        "entity_type": "groups"
                    }, {
                        "id": 8,
                        "display_name": "Create Groups",
                        "name": "create",
                        "slug": "create-groups",
                        "entity_id": null,
                        "entity_type": "groups"
                    }, {
                        "id": 9,
                        "display_name": "Edit Groups",
                        "name": "edit",
                        "slug": "edit-groups",
                        "entity_id": null,
                        "entity_type": "groups"
                    }, {
                        "id": 10,
                        "display_name": "Delete Groups",
                        "name": "delete",
                        "slug": "delete-groups",
                        "entity_id": null,
                        "entity_type": "groups"
                    }, {
                        "id": 11,
                        "display_name": "View Campaigns",
                        "name": "view",
                        "slug": "view-campaigns",
                        "entity_id": null,
                        "entity_type": "campaigns"
                    }, {
                        "id": 12,
                        "display_name": "Create Campaigns",
                        "name": "create",
                        "slug": "create-campaigns",
                        "entity_id": null,
                        "entity_type": "campaigns"
                    }, {
                        "id": 13,
                        "display_name": "Edit Campaigns",
                        "name": "edit",
                        "slug": "edit-campaigns",
                        "entity_id": null,
                        "entity_type": "campaigns"
                    }, {
                        "id": 14,
                        "display_name": "Delete Campaigns",
                        "name": "delete",
                        "slug": "delete-campaigns",
                        "entity_id": null,
                        "entity_type": "campaigns"
                    }, {
                        "id": 15,
                        "display_name": "View Trips",
                        "name": "view",
                        "slug": "view-trips",
                        "entity_id": null,
                        "entity_type": "trips"
                    }, {
                        "id": 16,
                        "display_name": "Create Trips",
                        "name": "create",
                        "slug": "create-trips",
                        "entity_id": null,
                        "entity_type": "trips"
                    }, {
                        "id": 17,
                        "display_name": "Edit Trips",
                        "name": "edit",
                        "slug": "edit-trips",
                        "entity_id": null,
                        "entity_type": "trips"
                    }, {
                        "id": 18,
                        "display_name": "Delete Trips",
                        "name": "delete",
                        "slug": "delete-trips",
                        "entity_id": null,
                        "entity_type": "trips"
                    }, {
                        "id": 19,
                        "display_name": "View Reservations",
                        "name": "view",
                        "slug": "view-reservations",
                        "entity_id": null,
                        "entity_type": "reservations"
                    }, {
                        "id": 20,
                        "display_name": "Create Reservations",
                        "name": "create",
                        "slug": "create-reservations",
                        "entity_id": null,
                        "entity_type": "reservations"
                    }, {
                        "id": 21,
                        "display_name": "Edit Reservations",
                        "name": "edit",
                        "slug": "edit-reservations",
                        "entity_id": null,
                        "entity_type": "reservations"
                    }, {
                        "id": 22,
                        "display_name": "Delete Reservations",
                        "name": "delete",
                        "slug": "delete-reservations",
                        "entity_id": null,
                        "entity_type": "reservations"
                    }, {
                        "id": 23,
                        "display_name": "Manage Costs Reservations",
                        "name": "manage costs",
                        "slug": "manage costs-reservations",
                        "entity_id": null,
                        "entity_type": "reservations"
                    }, {
                        "id": 24,
                        "display_name": "Manage Payments Reservations",
                        "name": "manage payments",
                        "slug": "manage payments-reservations",
                        "entity_id": null,
                        "entity_type": "reservations"
                    }, {
                        "id": 25,
                        "display_name": "Manage Requirements Reservations",
                        "name": "manage requirements",
                        "slug": "manage requirements-reservations",
                        "entity_id": null,
                        "entity_type": "reservations"
                    }, {
                        "id": 26,
                        "display_name": "View Projects",
                        "name": "view",
                        "slug": "view-projects",
                        "entity_id": null,
                        "entity_type": "projects"
                    }, {
                        "id": 27,
                        "display_name": "Create Projects",
                        "name": "create",
                        "slug": "create-projects",
                        "entity_id": null,
                        "entity_type": "projects"
                    }, {
                        "id": 28,
                        "display_name": "Edit Projects",
                        "name": "edit",
                        "slug": "edit-projects",
                        "entity_id": null,
                        "entity_type": "projects"
                    }, {
                        "id": 29,
                        "display_name": "Delete Projects",
                        "name": "delete",
                        "slug": "delete-projects",
                        "entity_id": null,
                        "entity_type": "projects"
                    }, {
                        "id": 30,
                        "display_name": "View App\\models\\v1\\cost",
                        "name": "view",
                        "slug": "view-app\\models\\v1\\cost",
                        "entity_id": null,
                        "entity_type": "App\\Models\\v1\\Cost"
                    }, {
                        "id": 31,
                        "display_name": "Create App\\models\\v1\\cost",
                        "name": "create",
                        "slug": "create-app\\models\\v1\\cost",
                        "entity_id": null,
                        "entity_type": "App\\Models\\v1\\Cost"
                    }, {
                        "id": 32,
                        "display_name": "Edit App\\models\\v1\\cost",
                        "name": "edit",
                        "slug": "edit-app\\models\\v1\\cost",
                        "entity_id": null,
                        "entity_type": "App\\Models\\v1\\Cost"
                    }, {
                        "id": 33,
                        "display_name": "Delete App\\models\\v1\\cost",
                        "name": "delete",
                        "slug": "delete-app\\models\\v1\\cost",
                        "entity_id": null,
                        "entity_type": "App\\Models\\v1\\Cost"
                    }, {
                        "id": 34,
                        "display_name": "View Project_causes",
                        "name": "view",
                        "slug": "view-project_causes",
                        "entity_id": null,
                        "entity_type": "project_causes"
                    }, {
                        "id": 35,
                        "display_name": "Create Project_causes",
                        "name": "create",
                        "slug": "create-project_causes",
                        "entity_id": null,
                        "entity_type": "project_causes"
                    }, {
                        "id": 36,
                        "display_name": "Edit Project_causes",
                        "name": "edit",
                        "slug": "edit-project_causes",
                        "entity_id": null,
                        "entity_type": "project_causes"
                    }, {
                        "id": 37,
                        "display_name": "Delete Project_causes",
                        "name": "delete",
                        "slug": "delete-project_causes",
                        "entity_id": null,
                        "entity_type": "project_causes"
                    }, {
                        "id": 38,
                        "display_name": "View Transactions",
                        "name": "view",
                        "slug": "view-transactions",
                        "entity_id": null,
                        "entity_type": "transactions"
                    }, {
                        "id": 39,
                        "display_name": "Create Transactions",
                        "name": "create",
                        "slug": "create-transactions",
                        "entity_id": null,
                        "entity_type": "transactions"
                    }, {
                        "id": 40,
                        "display_name": "Edit Transactions",
                        "name": "edit",
                        "slug": "edit-transactions",
                        "entity_id": null,
                        "entity_type": "transactions"
                    }, {
                        "id": 41,
                        "display_name": "Delete Transactions",
                        "name": "delete",
                        "slug": "delete-transactions",
                        "entity_id": null,
                        "entity_type": "transactions"
                    }, {
                        "id": 42,
                        "display_name": "View Funds",
                        "name": "view",
                        "slug": "view-funds",
                        "entity_id": null,
                        "entity_type": "funds"
                    }, {
                        "id": 43,
                        "display_name": "Create Funds",
                        "name": "create",
                        "slug": "create-funds",
                        "entity_id": null,
                        "entity_type": "funds"
                    }, {
                        "id": 44,
                        "display_name": "Edit Funds",
                        "name": "edit",
                        "slug": "edit-funds",
                        "entity_id": null,
                        "entity_type": "funds"
                    }, {
                        "id": 45,
                        "display_name": "View Donors",
                        "name": "view",
                        "slug": "view-donors",
                        "entity_id": null,
                        "entity_type": "donors"
                    }, {
                        "id": 46,
                        "display_name": "Create Donors",
                        "name": "create",
                        "slug": "create-donors",
                        "entity_id": null,
                        "entity_type": "donors"
                    }, {
                        "id": 47,
                        "display_name": "Edit Donors",
                        "name": "edit",
                        "slug": "edit-donors",
                        "entity_id": null,
                        "entity_type": "donors"
                    }, {
                        "id": 48,
                        "display_name": "Delete Donors",
                        "name": "delete",
                        "slug": "delete-donors",
                        "entity_id": null,
                        "entity_type": "donors"
                    }, {
                        "id": 49,
                        "display_name": "Modify Todos",
                        "name": "modify",
                        "slug": "modify-todos",
                        "entity_id": null,
                        "entity_type": "todos"
                    }, {
                        "id": 50,
                        "display_name": "Modify Notes",
                        "name": "modify",
                        "slug": "modify-notes",
                        "entity_id": null,
                        "entity_type": "notes"
                    }, {
                        "id": 51,
                        "display_name": "View Uploads",
                        "name": "view",
                        "slug": "view-uploads",
                        "entity_id": null,
                        "entity_type": "uploads"
                    }, {
                        "id": 52,
                        "display_name": "Create Uploads",
                        "name": "create",
                        "slug": "create-uploads",
                        "entity_id": null,
                        "entity_type": "uploads"
                    }, {
                        "id": 53,
                        "display_name": "Edit Uploads",
                        "name": "edit",
                        "slug": "edit-uploads",
                        "entity_id": null,
                        "entity_type": "uploads"
                    }, {
                        "id": 54,
                        "display_name": "Delete Uploads",
                        "name": "delete",
                        "slug": "delete-uploads",
                        "entity_id": null,
                        "entity_type": "uploads"
                    }]
                }
            }
            if (params.includes('abilities')) {
                obj.roles = {
                    "data": [{
                        "id": 1,
                        "name": "member",
                        "abilities": {
                            "data": [{
                                "id": 1,
                                "display_name": "Access Dashboard",
                                "name": "access-dashboard",
                                "slug": "access-dashboard",
                                "entity_id": null,
                                "entity_type": null
                            }]
                        }
                    }, {
                        "id": 3,
                        "name": "admin",
                        "abilities": {
                            "data": [{
                                "id": 1,
                                "display_name": "Access Dashboard",
                                "name": "access-dashboard",
                                "slug": "access-dashboard",
                                "entity_id": null,
                                "entity_type": null
                            }, {
                                "id": 2,
                                "display_name": "Access Admin",
                                "name": "access-admin",
                                "slug": "access-admin",
                                "entity_id": null,
                                "entity_type": null
                            }, {
                                "id": 3,
                                "display_name": "View Users",
                                "name": "view",
                                "slug": "view-users",
                                "entity_id": null,
                                "entity_type": "users"
                            }, {
                                "id": 4,
                                "display_name": "Create Users",
                                "name": "create",
                                "slug": "create-users",
                                "entity_id": null,
                                "entity_type": "users"
                            }, {
                                "id": 5,
                                "display_name": "Edit Users",
                                "name": "edit",
                                "slug": "edit-users",
                                "entity_id": null,
                                "entity_type": "users"
                            }, {
                                "id": 6,
                                "display_name": "Delete Users",
                                "name": "delete",
                                "slug": "delete-users",
                                "entity_id": null,
                                "entity_type": "users"
                            }, {
                                "id": 7,
                                "display_name": "View Groups",
                                "name": "view",
                                "slug": "view-groups",
                                "entity_id": null,
                                "entity_type": "groups"
                            }, {
                                "id": 8,
                                "display_name": "Create Groups",
                                "name": "create",
                                "slug": "create-groups",
                                "entity_id": null,
                                "entity_type": "groups"
                            }, {
                                "id": 9,
                                "display_name": "Edit Groups",
                                "name": "edit",
                                "slug": "edit-groups",
                                "entity_id": null,
                                "entity_type": "groups"
                            }, {
                                "id": 10,
                                "display_name": "Delete Groups",
                                "name": "delete",
                                "slug": "delete-groups",
                                "entity_id": null,
                                "entity_type": "groups"
                            }, {
                                "id": 11,
                                "display_name": "View Campaigns",
                                "name": "view",
                                "slug": "view-campaigns",
                                "entity_id": null,
                                "entity_type": "campaigns"
                            }, {
                                "id": 12,
                                "display_name": "Create Campaigns",
                                "name": "create",
                                "slug": "create-campaigns",
                                "entity_id": null,
                                "entity_type": "campaigns"
                            }, {
                                "id": 13,
                                "display_name": "Edit Campaigns",
                                "name": "edit",
                                "slug": "edit-campaigns",
                                "entity_id": null,
                                "entity_type": "campaigns"
                            }, {
                                "id": 14,
                                "display_name": "Delete Campaigns",
                                "name": "delete",
                                "slug": "delete-campaigns",
                                "entity_id": null,
                                "entity_type": "campaigns"
                            }, {
                                "id": 15,
                                "display_name": "View Trips",
                                "name": "view",
                                "slug": "view-trips",
                                "entity_id": null,
                                "entity_type": "trips"
                            }, {
                                "id": 16,
                                "display_name": "Create Trips",
                                "name": "create",
                                "slug": "create-trips",
                                "entity_id": null,
                                "entity_type": "trips"
                            }, {
                                "id": 17,
                                "display_name": "Edit Trips",
                                "name": "edit",
                                "slug": "edit-trips",
                                "entity_id": null,
                                "entity_type": "trips"
                            }, {
                                "id": 18,
                                "display_name": "Delete Trips",
                                "name": "delete",
                                "slug": "delete-trips",
                                "entity_id": null,
                                "entity_type": "trips"
                            }, {
                                "id": 19,
                                "display_name": "View Reservations",
                                "name": "view",
                                "slug": "view-reservations",
                                "entity_id": null,
                                "entity_type": "reservations"
                            }, {
                                "id": 20,
                                "display_name": "Create Reservations",
                                "name": "create",
                                "slug": "create-reservations",
                                "entity_id": null,
                                "entity_type": "reservations"
                            }, {
                                "id": 21,
                                "display_name": "Edit Reservations",
                                "name": "edit",
                                "slug": "edit-reservations",
                                "entity_id": null,
                                "entity_type": "reservations"
                            }, {
                                "id": 22,
                                "display_name": "Delete Reservations",
                                "name": "delete",
                                "slug": "delete-reservations",
                                "entity_id": null,
                                "entity_type": "reservations"
                            }, {
                                "id": 23,
                                "display_name": "Manage Costs Reservations",
                                "name": "manage costs",
                                "slug": "manage costs-reservations",
                                "entity_id": null,
                                "entity_type": "reservations"
                            }, {
                                "id": 24,
                                "display_name": "Manage Payments Reservations",
                                "name": "manage payments",
                                "slug": "manage payments-reservations",
                                "entity_id": null,
                                "entity_type": "reservations"
                            }, {
                                "id": 25,
                                "display_name": "Manage Requirements Reservations",
                                "name": "manage requirements",
                                "slug": "manage requirements-reservations",
                                "entity_id": null,
                                "entity_type": "reservations"
                            }, {
                                "id": 26,
                                "display_name": "View Projects",
                                "name": "view",
                                "slug": "view-projects",
                                "entity_id": null,
                                "entity_type": "projects"
                            }, {
                                "id": 27,
                                "display_name": "Create Projects",
                                "name": "create",
                                "slug": "create-projects",
                                "entity_id": null,
                                "entity_type": "projects"
                            }, {
                                "id": 28,
                                "display_name": "Edit Projects",
                                "name": "edit",
                                "slug": "edit-projects",
                                "entity_id": null,
                                "entity_type": "projects"
                            }, {
                                "id": 29,
                                "display_name": "Delete Projects",
                                "name": "delete",
                                "slug": "delete-projects",
                                "entity_id": null,
                                "entity_type": "projects"
                            }, {
                                "id": 30,
                                "display_name": "View App\\models\\v1\\cost",
                                "name": "view",
                                "slug": "view-app\\models\\v1\\cost",
                                "entity_id": null,
                                "entity_type": "App\\Models\\v1\\Cost"
                            }, {
                                "id": 31,
                                "display_name": "Create App\\models\\v1\\cost",
                                "name": "create",
                                "slug": "create-app\\models\\v1\\cost",
                                "entity_id": null,
                                "entity_type": "App\\Models\\v1\\Cost"
                            }, {
                                "id": 32,
                                "display_name": "Edit App\\models\\v1\\cost",
                                "name": "edit",
                                "slug": "edit-app\\models\\v1\\cost",
                                "entity_id": null,
                                "entity_type": "App\\Models\\v1\\Cost"
                            }, {
                                "id": 33,
                                "display_name": "Delete App\\models\\v1\\cost",
                                "name": "delete",
                                "slug": "delete-app\\models\\v1\\cost",
                                "entity_id": null,
                                "entity_type": "App\\Models\\v1\\Cost"
                            }, {
                                "id": 34,
                                "display_name": "View Project_causes",
                                "name": "view",
                                "slug": "view-project_causes",
                                "entity_id": null,
                                "entity_type": "project_causes"
                            }, {
                                "id": 35,
                                "display_name": "Create Project_causes",
                                "name": "create",
                                "slug": "create-project_causes",
                                "entity_id": null,
                                "entity_type": "project_causes"
                            }, {
                                "id": 36,
                                "display_name": "Edit Project_causes",
                                "name": "edit",
                                "slug": "edit-project_causes",
                                "entity_id": null,
                                "entity_type": "project_causes"
                            }, {
                                "id": 37,
                                "display_name": "Delete Project_causes",
                                "name": "delete",
                                "slug": "delete-project_causes",
                                "entity_id": null,
                                "entity_type": "project_causes"
                            }, {
                                "id": 38,
                                "display_name": "View Transactions",
                                "name": "view",
                                "slug": "view-transactions",
                                "entity_id": null,
                                "entity_type": "transactions"
                            }, {
                                "id": 39,
                                "display_name": "Create Transactions",
                                "name": "create",
                                "slug": "create-transactions",
                                "entity_id": null,
                                "entity_type": "transactions"
                            }, {
                                "id": 40,
                                "display_name": "Edit Transactions",
                                "name": "edit",
                                "slug": "edit-transactions",
                                "entity_id": null,
                                "entity_type": "transactions"
                            }, {
                                "id": 41,
                                "display_name": "Delete Transactions",
                                "name": "delete",
                                "slug": "delete-transactions",
                                "entity_id": null,
                                "entity_type": "transactions"
                            }, {
                                "id": 42,
                                "display_name": "View Funds",
                                "name": "view",
                                "slug": "view-funds",
                                "entity_id": null,
                                "entity_type": "funds"
                            }, {
                                "id": 43,
                                "display_name": "Create Funds",
                                "name": "create",
                                "slug": "create-funds",
                                "entity_id": null,
                                "entity_type": "funds"
                            }, {
                                "id": 44,
                                "display_name": "Edit Funds",
                                "name": "edit",
                                "slug": "edit-funds",
                                "entity_id": null,
                                "entity_type": "funds"
                            }, {
                                "id": 45,
                                "display_name": "View Donors",
                                "name": "view",
                                "slug": "view-donors",
                                "entity_id": null,
                                "entity_type": "donors"
                            }, {
                                "id": 46,
                                "display_name": "Create Donors",
                                "name": "create",
                                "slug": "create-donors",
                                "entity_id": null,
                                "entity_type": "donors"
                            }, {
                                "id": 47,
                                "display_name": "Edit Donors",
                                "name": "edit",
                                "slug": "edit-donors",
                                "entity_id": null,
                                "entity_type": "donors"
                            }, {
                                "id": 48,
                                "display_name": "Delete Donors",
                                "name": "delete",
                                "slug": "delete-donors",
                                "entity_id": null,
                                "entity_type": "donors"
                            }, {
                                "id": 49,
                                "display_name": "Modify Todos",
                                "name": "modify",
                                "slug": "modify-todos",
                                "entity_id": null,
                                "entity_type": "todos"
                            }, {
                                "id": 50,
                                "display_name": "Modify Notes",
                                "name": "modify",
                                "slug": "modify-notes",
                                "entity_id": null,
                                "entity_type": "notes"
                            }, {
                                "id": 51,
                                "display_name": "View Uploads",
                                "name": "view",
                                "slug": "view-uploads",
                                "entity_id": null,
                                "entity_type": "uploads"
                            }, {
                                "id": 52,
                                "display_name": "Create Uploads",
                                "name": "create",
                                "slug": "create-uploads",
                                "entity_id": null,
                                "entity_type": "uploads"
                            }, {
                                "id": 53,
                                "display_name": "Edit Uploads",
                                "name": "edit",
                                "slug": "edit-uploads",
                                "entity_id": null,
                                "entity_type": "uploads"
                            }, {
                                "id": 54,
                                "display_name": "Delete Uploads",
                                "name": "delete",
                                "slug": "delete-uploads",
                                "entity_id": null,
                                "entity_type": "uploads"
                            }]
                        }
                    }]
                }
            }
        }

        let body = {
            data: obj
        };

        return {
            body: body,
            status: 200,
            statusText: 'OK',
            headers: {/*headers*/},
            delay: Settings.delay, // millisecond
        }
    },

    // Users API
    ['GET *users/:id?include=:include'] (pathMatch, query, request) {
        // before respond, you can check the path and query parameters with `pathMatch` & `query`
        // powered by 'url-pattern' & 'qs'
        // https://www.npmjs.com/package/url-pattern
        // https://www.npmjs.com/package/qs
        let body = {
            "data": {
                "id": "112d15e5-c447-4c9e-bf25-b4cdb450c6a2",
                "name": "Administrator",
                "email": "admin@admin.com",
                "password": "$2y$10$qBd9LjcDtM4MZlAvgIR9H.43NiD0OPPVpvSiE\/YaOLqqBvk2kCSpO",
                "alt_email": null,
                "gender": "Male",
                "status": "Married",
                "birthday": "1978-12-30",
                "phone_one": null,
                "phone_two": null,
                "street": "7872 Lang Wall",
                "city": "Port Loraine",
                "state": "Idaho",
                "zip": "90344",
                "country_code": "la",
                "country_name": "Lao, People's Democratic Republic",
                "timezone": "Asia\/Kolkata",
                "bio": "test",
                "url": "administrator",
                "avatar": "https:\/\/missions.dev\/api\/images\/avatars\/112d15e5-c447-4c9e-bf25-b4cdb450c6a2_1487658721.jpg",
                "banner": "https:\/\/missions.dev\/api\/images\/banners\/gen-ban-2-2560x800.jpg",
                "public": false,
                "created_at": "2017-02-20 22:00:08",
                "updated_at": "2017-02-24 12:53:22",
                "links": [{"rel": "self", "uri": "\/users\/112d15e5-c447-4c9e-bf25-b4cdb450c6a2"}],
                "roles": {
                    "data": [{
                        "id": 1,
                        "name": "member",
                        "abilities": {
                            "data": [{
                                "id": 1,
                                "display_name": "Access Dashboard",
                                "name": "access-dashboard",
                                "slug": "access-dashboard",
                                "entity_id": null,
                                "entity_type": null
                            }]
                        }
                    }, {
                        "id": 3,
                        "name": "admin",
                        "abilities": {
                            "data": [{
                                "id": 1,
                                "display_name": "Access Dashboard",
                                "name": "access-dashboard",
                                "slug": "access-dashboard",
                                "entity_id": null,
                                "entity_type": null
                            }, {
                                "id": 2,
                                "display_name": "Access Admin",
                                "name": "access-admin",
                                "slug": "access-admin",
                                "entity_id": null,
                                "entity_type": null
                            }, {
                                "id": 3,
                                "display_name": "View Users",
                                "name": "view",
                                "slug": "view-users",
                                "entity_id": null,
                                "entity_type": "users"
                            }, {
                                "id": 4,
                                "display_name": "Create Users",
                                "name": "create",
                                "slug": "create-users",
                                "entity_id": null,
                                "entity_type": "users"
                            }, {
                                "id": 5,
                                "display_name": "Edit Users",
                                "name": "edit",
                                "slug": "edit-users",
                                "entity_id": null,
                                "entity_type": "users"
                            }, {
                                "id": 6,
                                "display_name": "Delete Users",
                                "name": "delete",
                                "slug": "delete-users",
                                "entity_id": null,
                                "entity_type": "users"
                            }, {
                                "id": 7,
                                "display_name": "View Groups",
                                "name": "view",
                                "slug": "view-groups",
                                "entity_id": null,
                                "entity_type": "groups"
                            }, {
                                "id": 8,
                                "display_name": "Create Groups",
                                "name": "create",
                                "slug": "create-groups",
                                "entity_id": null,
                                "entity_type": "groups"
                            }, {
                                "id": 9,
                                "display_name": "Edit Groups",
                                "name": "edit",
                                "slug": "edit-groups",
                                "entity_id": null,
                                "entity_type": "groups"
                            }, {
                                "id": 10,
                                "display_name": "Delete Groups",
                                "name": "delete",
                                "slug": "delete-groups",
                                "entity_id": null,
                                "entity_type": "groups"
                            }, {
                                "id": 11,
                                "display_name": "View Campaigns",
                                "name": "view",
                                "slug": "view-campaigns",
                                "entity_id": null,
                                "entity_type": "campaigns"
                            }, {
                                "id": 12,
                                "display_name": "Create Campaigns",
                                "name": "create",
                                "slug": "create-campaigns",
                                "entity_id": null,
                                "entity_type": "campaigns"
                            }, {
                                "id": 13,
                                "display_name": "Edit Campaigns",
                                "name": "edit",
                                "slug": "edit-campaigns",
                                "entity_id": null,
                                "entity_type": "campaigns"
                            }, {
                                "id": 14,
                                "display_name": "Delete Campaigns",
                                "name": "delete",
                                "slug": "delete-campaigns",
                                "entity_id": null,
                                "entity_type": "campaigns"
                            }, {
                                "id": 15,
                                "display_name": "View Trips",
                                "name": "view",
                                "slug": "view-trips",
                                "entity_id": null,
                                "entity_type": "trips"
                            }, {
                                "id": 16,
                                "display_name": "Create Trips",
                                "name": "create",
                                "slug": "create-trips",
                                "entity_id": null,
                                "entity_type": "trips"
                            }, {
                                "id": 17,
                                "display_name": "Edit Trips",
                                "name": "edit",
                                "slug": "edit-trips",
                                "entity_id": null,
                                "entity_type": "trips"
                            }, {
                                "id": 18,
                                "display_name": "Delete Trips",
                                "name": "delete",
                                "slug": "delete-trips",
                                "entity_id": null,
                                "entity_type": "trips"
                            }, {
                                "id": 19,
                                "display_name": "View Reservations",
                                "name": "view",
                                "slug": "view-reservations",
                                "entity_id": null,
                                "entity_type": "reservations"
                            }, {
                                "id": 20,
                                "display_name": "Create Reservations",
                                "name": "create",
                                "slug": "create-reservations",
                                "entity_id": null,
                                "entity_type": "reservations"
                            }, {
                                "id": 21,
                                "display_name": "Edit Reservations",
                                "name": "edit",
                                "slug": "edit-reservations",
                                "entity_id": null,
                                "entity_type": "reservations"
                            }, {
                                "id": 22,
                                "display_name": "Delete Reservations",
                                "name": "delete",
                                "slug": "delete-reservations",
                                "entity_id": null,
                                "entity_type": "reservations"
                            }, {
                                "id": 23,
                                "display_name": "Manage Costs Reservations",
                                "name": "manage costs",
                                "slug": "manage costs-reservations",
                                "entity_id": null,
                                "entity_type": "reservations"
                            }, {
                                "id": 24,
                                "display_name": "Manage Payments Reservations",
                                "name": "manage payments",
                                "slug": "manage payments-reservations",
                                "entity_id": null,
                                "entity_type": "reservations"
                            }, {
                                "id": 25,
                                "display_name": "Manage Requirements Reservations",
                                "name": "manage requirements",
                                "slug": "manage requirements-reservations",
                                "entity_id": null,
                                "entity_type": "reservations"
                            }, {
                                "id": 26,
                                "display_name": "View Projects",
                                "name": "view",
                                "slug": "view-projects",
                                "entity_id": null,
                                "entity_type": "projects"
                            }, {
                                "id": 27,
                                "display_name": "Create Projects",
                                "name": "create",
                                "slug": "create-projects",
                                "entity_id": null,
                                "entity_type": "projects"
                            }, {
                                "id": 28,
                                "display_name": "Edit Projects",
                                "name": "edit",
                                "slug": "edit-projects",
                                "entity_id": null,
                                "entity_type": "projects"
                            }, {
                                "id": 29,
                                "display_name": "Delete Projects",
                                "name": "delete",
                                "slug": "delete-projects",
                                "entity_id": null,
                                "entity_type": "projects"
                            }, {
                                "id": 30,
                                "display_name": "View App\\models\\v1\\cost",
                                "name": "view",
                                "slug": "view-app\\models\\v1\\cost",
                                "entity_id": null,
                                "entity_type": "App\\Models\\v1\\Cost"
                            }, {
                                "id": 31,
                                "display_name": "Create App\\models\\v1\\cost",
                                "name": "create",
                                "slug": "create-app\\models\\v1\\cost",
                                "entity_id": null,
                                "entity_type": "App\\Models\\v1\\Cost"
                            }, {
                                "id": 32,
                                "display_name": "Edit App\\models\\v1\\cost",
                                "name": "edit",
                                "slug": "edit-app\\models\\v1\\cost",
                                "entity_id": null,
                                "entity_type": "App\\Models\\v1\\Cost"
                            }, {
                                "id": 33,
                                "display_name": "Delete App\\models\\v1\\cost",
                                "name": "delete",
                                "slug": "delete-app\\models\\v1\\cost",
                                "entity_id": null,
                                "entity_type": "App\\Models\\v1\\Cost"
                            }, {
                                "id": 34,
                                "display_name": "View Project_causes",
                                "name": "view",
                                "slug": "view-project_causes",
                                "entity_id": null,
                                "entity_type": "project_causes"
                            }, {
                                "id": 35,
                                "display_name": "Create Project_causes",
                                "name": "create",
                                "slug": "create-project_causes",
                                "entity_id": null,
                                "entity_type": "project_causes"
                            }, {
                                "id": 36,
                                "display_name": "Edit Project_causes",
                                "name": "edit",
                                "slug": "edit-project_causes",
                                "entity_id": null,
                                "entity_type": "project_causes"
                            }, {
                                "id": 37,
                                "display_name": "Delete Project_causes",
                                "name": "delete",
                                "slug": "delete-project_causes",
                                "entity_id": null,
                                "entity_type": "project_causes"
                            }, {
                                "id": 38,
                                "display_name": "View Transactions",
                                "name": "view",
                                "slug": "view-transactions",
                                "entity_id": null,
                                "entity_type": "transactions"
                            }, {
                                "id": 39,
                                "display_name": "Create Transactions",
                                "name": "create",
                                "slug": "create-transactions",
                                "entity_id": null,
                                "entity_type": "transactions"
                            }, {
                                "id": 40,
                                "display_name": "Edit Transactions",
                                "name": "edit",
                                "slug": "edit-transactions",
                                "entity_id": null,
                                "entity_type": "transactions"
                            }, {
                                "id": 41,
                                "display_name": "Delete Transactions",
                                "name": "delete",
                                "slug": "delete-transactions",
                                "entity_id": null,
                                "entity_type": "transactions"
                            }, {
                                "id": 42,
                                "display_name": "View Funds",
                                "name": "view",
                                "slug": "view-funds",
                                "entity_id": null,
                                "entity_type": "funds"
                            }, {
                                "id": 43,
                                "display_name": "Create Funds",
                                "name": "create",
                                "slug": "create-funds",
                                "entity_id": null,
                                "entity_type": "funds"
                            }, {
                                "id": 44,
                                "display_name": "Edit Funds",
                                "name": "edit",
                                "slug": "edit-funds",
                                "entity_id": null,
                                "entity_type": "funds"
                            }, {
                                "id": 45,
                                "display_name": "View Donors",
                                "name": "view",
                                "slug": "view-donors",
                                "entity_id": null,
                                "entity_type": "donors"
                            }, {
                                "id": 46,
                                "display_name": "Create Donors",
                                "name": "create",
                                "slug": "create-donors",
                                "entity_id": null,
                                "entity_type": "donors"
                            }, {
                                "id": 47,
                                "display_name": "Edit Donors",
                                "name": "edit",
                                "slug": "edit-donors",
                                "entity_id": null,
                                "entity_type": "donors"
                            }, {
                                "id": 48,
                                "display_name": "Delete Donors",
                                "name": "delete",
                                "slug": "delete-donors",
                                "entity_id": null,
                                "entity_type": "donors"
                            }, {
                                "id": 49,
                                "display_name": "Modify Todos",
                                "name": "modify",
                                "slug": "modify-todos",
                                "entity_id": null,
                                "entity_type": "todos"
                            }, {
                                "id": 50,
                                "display_name": "Modify Notes",
                                "name": "modify",
                                "slug": "modify-notes",
                                "entity_id": null,
                                "entity_type": "notes"
                            }, {
                                "id": 51,
                                "display_name": "View Uploads",
                                "name": "view",
                                "slug": "view-uploads",
                                "entity_id": null,
                                "entity_type": "uploads"
                            }, {
                                "id": 52,
                                "display_name": "Create Uploads",
                                "name": "create",
                                "slug": "create-uploads",
                                "entity_id": null,
                                "entity_type": "uploads"
                            }, {
                                "id": 53,
                                "display_name": "Edit Uploads",
                                "name": "edit",
                                "slug": "edit-uploads",
                                "entity_id": null,
                                "entity_type": "uploads"
                            }, {
                                "id": 54,
                                "display_name": "Delete Uploads",
                                "name": "delete",
                                "slug": "delete-uploads",
                                "entity_id": null,
                                "entity_type": "uploads"
                            }]
                        }
                    }]
                },
                "abilities": {
                    "data": [{
                        "id": 1,
                        "display_name": "Access Dashboard",
                        "name": "access-dashboard",
                        "slug": "access-dashboard",
                        "entity_id": null,
                        "entity_type": null
                    }, {
                        "id": 2,
                        "display_name": "Access Admin",
                        "name": "access-admin",
                        "slug": "access-admin",
                        "entity_id": null,
                        "entity_type": null
                    }, {
                        "id": 3,
                        "display_name": "View Users",
                        "name": "view",
                        "slug": "view-users",
                        "entity_id": null,
                        "entity_type": "users"
                    }, {
                        "id": 4,
                        "display_name": "Create Users",
                        "name": "create",
                        "slug": "create-users",
                        "entity_id": null,
                        "entity_type": "users"
                    }, {
                        "id": 5,
                        "display_name": "Edit Users",
                        "name": "edit",
                        "slug": "edit-users",
                        "entity_id": null,
                        "entity_type": "users"
                    }, {
                        "id": 6,
                        "display_name": "Delete Users",
                        "name": "delete",
                        "slug": "delete-users",
                        "entity_id": null,
                        "entity_type": "users"
                    }, {
                        "id": 7,
                        "display_name": "View Groups",
                        "name": "view",
                        "slug": "view-groups",
                        "entity_id": null,
                        "entity_type": "groups"
                    }, {
                        "id": 8,
                        "display_name": "Create Groups",
                        "name": "create",
                        "slug": "create-groups",
                        "entity_id": null,
                        "entity_type": "groups"
                    }, {
                        "id": 9,
                        "display_name": "Edit Groups",
                        "name": "edit",
                        "slug": "edit-groups",
                        "entity_id": null,
                        "entity_type": "groups"
                    }, {
                        "id": 10,
                        "display_name": "Delete Groups",
                        "name": "delete",
                        "slug": "delete-groups",
                        "entity_id": null,
                        "entity_type": "groups"
                    }, {
                        "id": 11,
                        "display_name": "View Campaigns",
                        "name": "view",
                        "slug": "view-campaigns",
                        "entity_id": null,
                        "entity_type": "campaigns"
                    }, {
                        "id": 12,
                        "display_name": "Create Campaigns",
                        "name": "create",
                        "slug": "create-campaigns",
                        "entity_id": null,
                        "entity_type": "campaigns"
                    }, {
                        "id": 13,
                        "display_name": "Edit Campaigns",
                        "name": "edit",
                        "slug": "edit-campaigns",
                        "entity_id": null,
                        "entity_type": "campaigns"
                    }, {
                        "id": 14,
                        "display_name": "Delete Campaigns",
                        "name": "delete",
                        "slug": "delete-campaigns",
                        "entity_id": null,
                        "entity_type": "campaigns"
                    }, {
                        "id": 15,
                        "display_name": "View Trips",
                        "name": "view",
                        "slug": "view-trips",
                        "entity_id": null,
                        "entity_type": "trips"
                    }, {
                        "id": 16,
                        "display_name": "Create Trips",
                        "name": "create",
                        "slug": "create-trips",
                        "entity_id": null,
                        "entity_type": "trips"
                    }, {
                        "id": 17,
                        "display_name": "Edit Trips",
                        "name": "edit",
                        "slug": "edit-trips",
                        "entity_id": null,
                        "entity_type": "trips"
                    }, {
                        "id": 18,
                        "display_name": "Delete Trips",
                        "name": "delete",
                        "slug": "delete-trips",
                        "entity_id": null,
                        "entity_type": "trips"
                    }, {
                        "id": 19,
                        "display_name": "View Reservations",
                        "name": "view",
                        "slug": "view-reservations",
                        "entity_id": null,
                        "entity_type": "reservations"
                    }, {
                        "id": 20,
                        "display_name": "Create Reservations",
                        "name": "create",
                        "slug": "create-reservations",
                        "entity_id": null,
                        "entity_type": "reservations"
                    }, {
                        "id": 21,
                        "display_name": "Edit Reservations",
                        "name": "edit",
                        "slug": "edit-reservations",
                        "entity_id": null,
                        "entity_type": "reservations"
                    }, {
                        "id": 22,
                        "display_name": "Delete Reservations",
                        "name": "delete",
                        "slug": "delete-reservations",
                        "entity_id": null,
                        "entity_type": "reservations"
                    }, {
                        "id": 23,
                        "display_name": "Manage Costs Reservations",
                        "name": "manage costs",
                        "slug": "manage costs-reservations",
                        "entity_id": null,
                        "entity_type": "reservations"
                    }, {
                        "id": 24,
                        "display_name": "Manage Payments Reservations",
                        "name": "manage payments",
                        "slug": "manage payments-reservations",
                        "entity_id": null,
                        "entity_type": "reservations"
                    }, {
                        "id": 25,
                        "display_name": "Manage Requirements Reservations",
                        "name": "manage requirements",
                        "slug": "manage requirements-reservations",
                        "entity_id": null,
                        "entity_type": "reservations"
                    }, {
                        "id": 26,
                        "display_name": "View Projects",
                        "name": "view",
                        "slug": "view-projects",
                        "entity_id": null,
                        "entity_type": "projects"
                    }, {
                        "id": 27,
                        "display_name": "Create Projects",
                        "name": "create",
                        "slug": "create-projects",
                        "entity_id": null,
                        "entity_type": "projects"
                    }, {
                        "id": 28,
                        "display_name": "Edit Projects",
                        "name": "edit",
                        "slug": "edit-projects",
                        "entity_id": null,
                        "entity_type": "projects"
                    }, {
                        "id": 29,
                        "display_name": "Delete Projects",
                        "name": "delete",
                        "slug": "delete-projects",
                        "entity_id": null,
                        "entity_type": "projects"
                    }, {
                        "id": 30,
                        "display_name": "View App\\models\\v1\\cost",
                        "name": "view",
                        "slug": "view-app\\models\\v1\\cost",
                        "entity_id": null,
                        "entity_type": "App\\Models\\v1\\Cost"
                    }, {
                        "id": 31,
                        "display_name": "Create App\\models\\v1\\cost",
                        "name": "create",
                        "slug": "create-app\\models\\v1\\cost",
                        "entity_id": null,
                        "entity_type": "App\\Models\\v1\\Cost"
                    }, {
                        "id": 32,
                        "display_name": "Edit App\\models\\v1\\cost",
                        "name": "edit",
                        "slug": "edit-app\\models\\v1\\cost",
                        "entity_id": null,
                        "entity_type": "App\\Models\\v1\\Cost"
                    }, {
                        "id": 33,
                        "display_name": "Delete App\\models\\v1\\cost",
                        "name": "delete",
                        "slug": "delete-app\\models\\v1\\cost",
                        "entity_id": null,
                        "entity_type": "App\\Models\\v1\\Cost"
                    }, {
                        "id": 34,
                        "display_name": "View Project_causes",
                        "name": "view",
                        "slug": "view-project_causes",
                        "entity_id": null,
                        "entity_type": "project_causes"
                    }, {
                        "id": 35,
                        "display_name": "Create Project_causes",
                        "name": "create",
                        "slug": "create-project_causes",
                        "entity_id": null,
                        "entity_type": "project_causes"
                    }, {
                        "id": 36,
                        "display_name": "Edit Project_causes",
                        "name": "edit",
                        "slug": "edit-project_causes",
                        "entity_id": null,
                        "entity_type": "project_causes"
                    }, {
                        "id": 37,
                        "display_name": "Delete Project_causes",
                        "name": "delete",
                        "slug": "delete-project_causes",
                        "entity_id": null,
                        "entity_type": "project_causes"
                    }, {
                        "id": 38,
                        "display_name": "View Transactions",
                        "name": "view",
                        "slug": "view-transactions",
                        "entity_id": null,
                        "entity_type": "transactions"
                    }, {
                        "id": 39,
                        "display_name": "Create Transactions",
                        "name": "create",
                        "slug": "create-transactions",
                        "entity_id": null,
                        "entity_type": "transactions"
                    }, {
                        "id": 40,
                        "display_name": "Edit Transactions",
                        "name": "edit",
                        "slug": "edit-transactions",
                        "entity_id": null,
                        "entity_type": "transactions"
                    }, {
                        "id": 41,
                        "display_name": "Delete Transactions",
                        "name": "delete",
                        "slug": "delete-transactions",
                        "entity_id": null,
                        "entity_type": "transactions"
                    }, {
                        "id": 42,
                        "display_name": "View Funds",
                        "name": "view",
                        "slug": "view-funds",
                        "entity_id": null,
                        "entity_type": "funds"
                    }, {
                        "id": 43,
                        "display_name": "Create Funds",
                        "name": "create",
                        "slug": "create-funds",
                        "entity_id": null,
                        "entity_type": "funds"
                    }, {
                        "id": 44,
                        "display_name": "Edit Funds",
                        "name": "edit",
                        "slug": "edit-funds",
                        "entity_id": null,
                        "entity_type": "funds"
                    }, {
                        "id": 45,
                        "display_name": "View Donors",
                        "name": "view",
                        "slug": "view-donors",
                        "entity_id": null,
                        "entity_type": "donors"
                    }, {
                        "id": 46,
                        "display_name": "Create Donors",
                        "name": "create",
                        "slug": "create-donors",
                        "entity_id": null,
                        "entity_type": "donors"
                    }, {
                        "id": 47,
                        "display_name": "Edit Donors",
                        "name": "edit",
                        "slug": "edit-donors",
                        "entity_id": null,
                        "entity_type": "donors"
                    }, {
                        "id": 48,
                        "display_name": "Delete Donors",
                        "name": "delete",
                        "slug": "delete-donors",
                        "entity_id": null,
                        "entity_type": "donors"
                    }, {
                        "id": 49,
                        "display_name": "Modify Todos",
                        "name": "modify",
                        "slug": "modify-todos",
                        "entity_id": null,
                        "entity_type": "todos"
                    }, {
                        "id": 50,
                        "display_name": "Modify Notes",
                        "name": "modify",
                        "slug": "modify-notes",
                        "entity_id": null,
                        "entity_type": "notes"
                    }, {
                        "id": 51,
                        "display_name": "View Uploads",
                        "name": "view",
                        "slug": "view-uploads",
                        "entity_id": null,
                        "entity_type": "uploads"
                    }, {
                        "id": 52,
                        "display_name": "Create Uploads",
                        "name": "create",
                        "slug": "create-uploads",
                        "entity_id": null,
                        "entity_type": "uploads"
                    }, {
                        "id": 53,
                        "display_name": "Edit Uploads",
                        "name": "edit",
                        "slug": "edit-uploads",
                        "entity_id": null,
                        "entity_type": "uploads"
                    }, {
                        "id": 54,
                        "display_name": "Delete Uploads",
                        "name": "delete",
                        "slug": "delete-uploads",
                        "entity_id": null,
                        "entity_type": "uploads"
                    }]
                }
            }
        };
        return {
            body: body,
            status: 200,
            statusText: 'OK',
            headers: {/*headers*/},
            delay: Settings.delay, // millisecond
        }
    },

    ['GET *users/:id/accolades/trip_history'] (pathMatch, query, request) {
        // before respond, you can check the path and query parameters with `pathMatch` & `query`
        // powered by 'url-pattern' & 'qs'
        // https://www.npmjs.com/package/url-pattern
        // https://www.npmjs.com/package/qs
        let body = {"data":[{"name":"trip_history","display_name":"Trip History","items":["2012 Bangkok, Thailand","2006 Cap Haitien, Haiti","2012 Lima, Peru","2011 Croix-de-Bouquet, Haiti"],"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:01:44"}]};
        return {
            body: body,
            status: 200,
            statusText: 'OK',
            headers: {/*headers*/},
            delay: Settings.delay, // millisecond
        }
    },

    ['GET *users/:id/accolades/countries_visited'] (pathMatch, query, request) {
        // before respond, you can check the path and query parameters with `pathMatch` & `query`
        // powered by 'url-pattern' & 'qs'
        // https://www.npmjs.com/package/url-pattern
        // https://www.npmjs.com/package/qs
        let body = {"data":[{"name":"countries_visited","display_name":"Countries Visited","items":[{"code":"jo","name":"Jordan"},{"code":"ci","name":"Cote d'Ivoire"},{"code":"vg","name":"Virgin Islands (British)"},{"code":"bj","name":"Benin"}],"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:01:44"}]};
        return {
            body: body,
            status: 200,
            statusText: 'OK',
            headers: {/*headers*/},
            delay: Settings.delay, // millisecond
        }
    },

    // Travel Itinerary API
    ['GET *itineraries/:id'] (pathMatch, query, request) {
        let body = {
            "data": {
                "id": "8850333f-7cc2-4509-b6db-33c8d3e7642c",
                "name": "Edmund Jessy Wolff's Travel Itinerary",
                "curator_id": "0005a7ea-f92f-371e-878a-d28423ea2cfb",
                "curator_type": "reservations",
                "activities": {
                    "data": [
                        {
                            "id": "bd0f3041-aebb-49aa-a66a-ddda26da9952",
                            "type": {
                                "id": "e3efa15d-d4c5-3d5a-a562-9dd84cd89290",
                                "name": "arrival"
                            },
                            "name": "Arrive in Miami",
                            "description": null,
                            "participant_id": "0005a7ea-f92f-371e-878a-d28423ea2cfb",
                            "participant_type": "reservations",
                            "occurred_at": "2017-07-21 15:45:00",
                            "created_at": "2017-04-21 18:14:34",
                            "updated_at": "2017-04-21 18:14:34",
                            "deleted_at": null,
                            "hubs": {
                                "data": [
                                    {
                                        "id": "0d5463b0-6067-4432-bb7c-6d4e8a94ad6f",
                                        "campaign_id": "b304fd5a-3c18-4a77-9722-e6138f3429d7",
                                        "name": "Miami International Airport",
                                        "call_sign": null,
                                        "address": null,
                                        "city": "Miami",
                                        "state": null,
                                        "zip": null,
                                        "country_code": null,
                                        "created_at": "2017-04-21 18:14:34",
                                        "updated_at": "2017-04-21 18:14:34"
                                    }
                                ]
                            },
                            "transports": {
                                "data": [
                                    {
                                        "id": "b8d20208-8f44-470f-a05c-ef26fd299a2f",
                                        "campaign_id": "b304fd5a-3c18-4a77-9722-e6138f3429d7",
                                        "type": "flight",
                                        "vessel_no": "DL100",
                                        "name": "Delta Airlines",
                                        "domestic": true,
                                        "capacity": 9999,
                                        "call_sign": null,
                                        "created_at": "2017-04-21 18:14:34",
                                        "updated_at": "2017-04-21 18:14:34",
                                        "links": [
                                            {
                                                "rel": "self",
                                                "uri": "/api/transports/b8d20208-8f44-470f-a05c-ef26fd299a2f"
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            "id": "97b10296-c983-43cb-bb69-b321fee23845",
                            "type": {
                                "id": "1282bca0-3e6d-3a42-b821-13437fd75603",
                                "name": "departure"
                            },
                            "name": "Depart Miami",
                            "description": null,
                            "participant_id": "0005a7ea-f92f-371e-878a-d28423ea2cfb",
                            "participant_type": "reservations",
                            "occurred_at": "2017-07-29 08:30:00",
                            "created_at": "2017-04-21 18:14:34",
                            "updated_at": "2017-04-21 18:14:34",
                            "deleted_at": null,
                            "hubs": {
                                "data": [
                                    {
                                        "id": "dd3dfe88-ed7c-4890-bcc2-97f27585337a",
                                        "campaign_id": "b304fd5a-3c18-4a77-9722-e6138f3429d7",
                                        "name": "Miami International Airport",
                                        "call_sign": null,
                                        "address": null,
                                        "city": "Miami",
                                        "state": null,
                                        "zip": null,
                                        "country_code": null,
                                        "created_at": "2017-04-21 18:14:34",
                                        "updated_at": "2017-04-21 18:14:34"
                                    }
                                ]
                            },
                            "transports": {
                                "data": [
                                    {
                                        "id": "57a8af30-207f-4806-a4ba-5af52cf70f0e",
                                        "campaign_id": "b304fd5a-3c18-4a77-9722-e6138f3429d7",
                                        "type": "flight",
                                        "vessel_no": "DL200",
                                        "name": "Delta Airlines",
                                        "domestic": true,
                                        "capacity": 9999,
                                        "call_sign": null,
                                        "created_at": "2017-04-21 18:14:34",
                                        "updated_at": "2017-04-21 18:14:34",
                                        "links": [
                                            {
                                                "rel": "self",
                                                "uri": "/api/transports/57a8af30-207f-4806-a4ba-5af52cf70f0e"
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    ]
                },
                "updated_at": "2017-04-21 18:14:34",
                "created_at": "2017-04-21 18:14:34",
                "deleted_at": null,
                "links": [
                    {
                        "rel": "self",
                        "uri": "/api/itineraries/8850333f-7cc2-4509-b6db-33c8d3e7642c"
                    }
                ]
            }
        };

        return {
            body: body,
            status: 200,
            statusText: 'OK',
            headers: {/*headers*/},
            delay: Settings.delay, // millisecond
        }

    },

    // Travel Itinerary API
    ['GET *campaigns/:id'] (pathMatch, query, request) {
        let body = {"data":{"id":"5830c58b-a183-49ec-a61e-a3c748b33c28","name":"1Nation1Day 2017","country":"Nicaragua","description":"1Nation1Day Nicaragua will be the largest global missions outreach in history. But this isn\u2019t just about numbers; it's about creating measurable change. It takes an unprecedented strategy to make this audacious vision a reality.","page_url":"1n1d17","page_src":"_1n1d2017","avatar":"https:\/\/missions.dev\/api\/images\/avatars\/1n1d17-white-400x400.jpg","avatar_upload_id":"10238fcd-7d2e-4056-93ea-e7405196fbd0","banner":null,"banner_upload_id":null,"started_at":"2017-07-22 00:00:00","ended_at":"2017-07-30 22:59:59","status":"Published","groups_count":10,"published_at":"2016-01-01 00:00:00","created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:03:33","links":[{"rel":"self","uri":"\/campaigns\/5830c58b-a183-49ec-a61e-a3c748b33c28"}],"trips":{"data":[{"id":"19706ed3-1db9-45f1-b29e-b75e8a5ad76d","group_id":"120d15bb-e82a-3e40-9a55-a1c22b6b3ade","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"a79c0feb-b593-4bef-a2c4-53cc30b1be83","rep":"Alex Waelchi","spots":84,"status":"active","starting_cost":"1758.00","companion_limit":3,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"ministry","difficulty":"level 3","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["medical professionals","women","men","business professionals"],"team_roles":["POLI","MDFG","OTEC","MCDR"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":true,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:01:55","updated_at":"2017-05-05 15:02:02","tags":[],"links":[{"rel":"self","uri":"\/trips\/19706ed3-1db9-45f1-b29e-b75e8a5ad76d"}],"group":{"data":{"id":"120d15bb-e82a-3e40-9a55-a1c22b6b3ade","status":"approved","name":"Stoltenberg-Cormier","type":"youth","timezone":"America\/Kentucky\/Monticello","description":"Cheshire Cat,' said Alice: '--where's the Duchess?' 'Hush! Hush!' said the Rabbit in a low, hurried tone. He looked at.","url":"stoltenberg-cormier","public":true,"address_one":"6925 Zachariah Estate","address_two":"21801","city":"East Jane","state":"Oklahoma","zip":null,"country_code":"br","country_name":"Brazil","phone_one":"14859053488","phone_two":"8544454907","email":"amira41@example.net","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:02:05","links":[{"rel":"self","uri":"\/groups\/120d15bb-e82a-3e40-9a55-a1c22b6b3ade"}]}}},{"id":"2012984c-67b7-489f-a51b-45912895f53e","group_id":"4bbde7eb-dfe2-3b08-84be-f3bcad4c969a","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"33b6bbdf-986b-424d-9d1c-1dd5d80e31bc","rep":"Sabrina Kreiger","spots":316,"status":"active","starting_cost":"1843.00","companion_limit":1,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"leader","difficulty":"level 2","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["teens","pastors","medical professionals","women"],"team_roles":["PRAS","NAST","DIET","CRDO"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":true,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:02:38","updated_at":"2017-05-05 15:02:42","tags":[],"links":[{"rel":"self","uri":"\/trips\/2012984c-67b7-489f-a51b-45912895f53e"}],"group":{"data":{"id":"4bbde7eb-dfe2-3b08-84be-f3bcad4c969a","status":"approved","name":"Toy-Braun","type":"business","timezone":"America\/Porto_Velho","description":"I was going a journey, I should think you'll feel it a little ledge of rock, and, as there was silence for some.","url":"toy-braun","public":true,"address_one":"488 Mattie Mountain Apt. 518","address_two":"45254","city":null,"state":null,"zip":null,"country_code":"ie","country_name":"Ireland","phone_one":"3285255388","phone_two":"9218561719260","email":"hjerde@example.org","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:02:49","links":[{"rel":"self","uri":"\/groups\/4bbde7eb-dfe2-3b08-84be-f3bcad4c969a"}]}}},{"id":"24c6fad4-6bf0-4c19-a155-2a8368e63134","group_id":"95922801-d4a1-35d7-a5e1-100f4e7f0594","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"936f58ef-3292-463a-a6e2-95a77c76f671","rep":"Curt Prohaska","spots":191,"status":"active","starting_cost":"1887.00","companion_limit":3,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"leader","difficulty":"level 2","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["medical professionals","teens","adults","pastors"],"team_roles":["MDSG","PRAS","LVNN","PHAA"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":true,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:02:49","updated_at":"2017-05-05 15:02:56","tags":[],"links":[{"rel":"self","uri":"\/trips\/24c6fad4-6bf0-4c19-a155-2a8368e63134"}],"group":{"data":{"id":"95922801-d4a1-35d7-a5e1-100f4e7f0594","status":"approved","name":"Fahey PLC","type":"business","timezone":"America\/Adak","description":"I eat\" is the capital of Paris, and Paris is the same tone, exactly as if she could even make out which were the.","url":"fahey-plc","public":true,"address_one":"4866 Dietrich Rapids Suite 577","address_two":null,"city":null,"state":null,"zip":null,"country_code":"bg","country_name":"Bulgaria","phone_one":"5973088268","phone_two":"2465546493739","email":"larkin.avery@example.com","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:03:00","links":[{"rel":"self","uri":"\/groups\/95922801-d4a1-35d7-a5e1-100f4e7f0594"}]}}},{"id":"251d47d7-44a6-4117-b7f8-2f70fdd4cc56","group_id":"23c03227-1747-3f13-9550-b36c5bed17c4","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"785f015e-753d-42c5-8231-f4ab77a33d24","rep":"Antonette Leannon","spots":422,"status":"active","starting_cost":"1760.00","companion_limit":1,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"leader","difficulty":"level 3","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["men","media professionals","business professionals","families"],"team_roles":["HEDU","MDPF","NAST","DENH"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":true,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:02:16","updated_at":"2017-05-05 15:02:23","tags":[],"links":[{"rel":"self","uri":"\/trips\/251d47d7-44a6-4117-b7f8-2f70fdd4cc56"}],"group":{"data":{"id":"23c03227-1747-3f13-9550-b36c5bed17c4","status":"approved","name":"Bergnaum-Bosco","type":"business","timezone":"Pacific\/Nauru","description":"English coast you find a pleasure in all my life, never!' They had not noticed before, and behind it, it occurred to.","url":"bergnaum-bosco","public":true,"address_one":"22567 Reilly Rest","address_two":null,"city":null,"state":"Michigan","zip":"99885","country_code":"no","country_name":"Norway","phone_one":"19326681524","phone_two":"5712965024","email":"blaise.gaylord@example.net","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:02:27","links":[{"rel":"self","uri":"\/groups\/23c03227-1747-3f13-9550-b36c5bed17c4"}]}}},{"id":"31425b90-0812-41a4-ba33-f29d9e87bbfa","group_id":"0ac60e11-f324-3be5-9995-9a28c121c69f","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"0c5daed1-2811-4163-aa7a-319a1bc45280","rep":"Vidal Block","spots":177,"status":"active","starting_cost":"1721.00","companion_limit":1,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"medical","difficulty":"level 3","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["pastors","men","adults","medical professionals"],"team_roles":["HEDU","BUSP","MCDR","REGN"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":false,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:01:48","tags":[],"links":[{"rel":"self","uri":"\/trips\/31425b90-0812-41a4-ba33-f29d9e87bbfa"}],"group":{"data":{"id":"0ac60e11-f324-3be5-9995-9a28c121c69f","status":"approved","name":"Osinski, Casper and Howe","type":"youth","timezone":"Antarctica\/Syowa","description":"Alice. The poor little thing sobbed again (or grunted, it was only a mouse that had made the whole party at once.","url":"osinski-casper-and-howe","public":true,"address_one":null,"address_two":"1003","city":null,"state":"South Dakota","zip":"28947","country_code":"ne","country_name":"Niger","phone_one":"13839045588","phone_two":"1632640203113775","email":"mueller.toni@example.org","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:23:40","links":[{"rel":"self","uri":"\/groups\/0ac60e11-f324-3be5-9995-9a28c121c69f"}]}}},{"id":"389ad2fd-14ee-4bf9-9b9c-b1d54b9fdb73","group_id":"e73e385a-435c-3ff1-a45c-2eb1db19a92b","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"acd7162d-2f4c-4c31-a908-456fa2051c42","rep":"Geraldine Quitzon","spots":217,"status":"active","starting_cost":"1885.00","companion_limit":0,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"medical","difficulty":"level 2","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["men","teens","pastors","women"],"team_roles":["PHYA","ODOC","CRDO","NTEC"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":true,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:03:11","updated_at":"2017-05-05 15:03:15","tags":[],"links":[{"rel":"self","uri":"\/trips\/389ad2fd-14ee-4bf9-9b9c-b1d54b9fdb73"}],"group":{"data":{"id":"e73e385a-435c-3ff1-a45c-2eb1db19a92b","status":"approved","name":"Beatty, Murazik and Kutch","type":"other","timezone":"Asia\/Dubai","description":"Gryphon. 'Then, you know,' Alice gently remarked; 'they'd have been that,' said Alice. 'Of course they were', said the.","url":"beatty-murazik-and-kutch","public":true,"address_one":null,"address_two":null,"city":"North Leanne","state":null,"zip":"21559-1491","country_code":"bl","country_name":"","phone_one":"13455943265","phone_two":"13644397912","email":"mcclure.vernice@example.org","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:03:22","links":[{"rel":"self","uri":"\/groups\/e73e385a-435c-3ff1-a45c-2eb1db19a92b"}]}}},{"id":"46794257-e12f-47d7-a40e-88019b79ef02","group_id":"0ac60e11-f324-3be5-9995-9a28c121c69f","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"27826a1e-578e-40f4-a5d5-35c059b722ae","rep":"Bill O'reilly","spots":365,"status":"active","starting_cost":"1859.00","companion_limit":2,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"family","difficulty":"level 3","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["adults","families","women","business professionals"],"team_roles":["BUSP","REGN","CODR","TMLR"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":false,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:01:55","tags":[],"links":[{"rel":"self","uri":"\/trips\/46794257-e12f-47d7-a40e-88019b79ef02"}],"group":{"data":{"id":"0ac60e11-f324-3be5-9995-9a28c121c69f","status":"approved","name":"Osinski, Casper and Howe","type":"youth","timezone":"Antarctica\/Syowa","description":"Alice. The poor little thing sobbed again (or grunted, it was only a mouse that had made the whole party at once.","url":"osinski-casper-and-howe","public":true,"address_one":null,"address_two":"1003","city":null,"state":"South Dakota","zip":"28947","country_code":"ne","country_name":"Niger","phone_one":"13839045588","phone_two":"1632640203113775","email":"mueller.toni@example.org","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:23:40","links":[{"rel":"self","uri":"\/groups\/0ac60e11-f324-3be5-9995-9a28c121c69f"}]}}},{"id":"4839fb16-5fe0-4723-b377-d46471c57562","group_id":"fb31f47e-f29e-323c-8f49-5184d4e58702","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"905599b9-3d5c-45c3-9670-e0750d2371f1","rep":"Reagan Mcdermott","spots":263,"status":"active","starting_cost":"1865.00","companion_limit":1,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"family","difficulty":"level 3","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["men","adults","media professionals","business professionals"],"team_roles":["CHRO","PHAA","NTEC","TMLR"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":false,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:03:22","updated_at":"2017-05-05 15:03:33","tags":[],"links":[{"rel":"self","uri":"\/trips\/4839fb16-5fe0-4723-b377-d46471c57562"}],"group":{"data":{"id":"fb31f47e-f29e-323c-8f49-5184d4e58702","status":"approved","name":"Strosin, Kutch and Koelpin","type":"church","timezone":"Asia\/Kuching","description":"Alice, (she had grown to her ear. 'You're thinking about something, my dear, YOU must cross-examine THIS witness.'.","url":"strosin-kutch-and-koelpin","public":true,"address_one":null,"address_two":null,"city":"Veummouth","state":null,"zip":"60031","country_code":"dm","country_name":"Dominica","phone_one":"16509796644","phone_two":"16629997061512","email":"rebecca.gleichner@example.org","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:03:33","links":[{"rel":"self","uri":"\/groups\/fb31f47e-f29e-323c-8f49-5184d4e58702"}]}}},{"id":"4f13b7bd-e100-4910-98d9-419c4e6b09c3","group_id":"95922801-d4a1-35d7-a5e1-100f4e7f0594","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"0a64d03c-0c1b-4aff-97c5-e3bdac96ead5","rep":"Makenna Hodkiewicz","spots":210,"status":"active","starting_cost":"1714.00","companion_limit":3,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"leader","difficulty":"level 2","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["men","media professionals","families","pastors"],"team_roles":["MEDI","MCDR","MDSP","CRDO"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":true,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:02:49","updated_at":"2017-05-05 15:03:00","tags":[],"links":[{"rel":"self","uri":"\/trips\/4f13b7bd-e100-4910-98d9-419c4e6b09c3"}],"group":{"data":{"id":"95922801-d4a1-35d7-a5e1-100f4e7f0594","status":"approved","name":"Fahey PLC","type":"business","timezone":"America\/Adak","description":"I eat\" is the capital of Paris, and Paris is the same tone, exactly as if she could even make out which were the.","url":"fahey-plc","public":true,"address_one":"4866 Dietrich Rapids Suite 577","address_two":null,"city":null,"state":null,"zip":null,"country_code":"bg","country_name":"Bulgaria","phone_one":"5973088268","phone_two":"2465546493739","email":"larkin.avery@example.com","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:03:00","links":[{"rel":"self","uri":"\/groups\/95922801-d4a1-35d7-a5e1-100f4e7f0594"}]}}},{"id":"4fb6188f-737d-42af-bc77-f71169ef9565","group_id":"fb31f47e-f29e-323c-8f49-5184d4e58702","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"0bd87ac7-62bc-4e33-a178-ad5293262786","rep":"Hollis Moen","spots":487,"status":"active","starting_cost":"1821.00","companion_limit":0,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"media","difficulty":"level 3","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["business professionals","women","pastors","medical professionals"],"team_roles":["PRAY","PRAS","BUSP","TMLR"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":true,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:03:22","updated_at":"2017-05-05 15:03:29","tags":[],"links":[{"rel":"self","uri":"\/trips\/4fb6188f-737d-42af-bc77-f71169ef9565"}],"group":{"data":{"id":"fb31f47e-f29e-323c-8f49-5184d4e58702","status":"approved","name":"Strosin, Kutch and Koelpin","type":"church","timezone":"Asia\/Kuching","description":"Alice, (she had grown to her ear. 'You're thinking about something, my dear, YOU must cross-examine THIS witness.'.","url":"strosin-kutch-and-koelpin","public":true,"address_one":null,"address_two":null,"city":"Veummouth","state":null,"zip":"60031","country_code":"dm","country_name":"Dominica","phone_one":"16509796644","phone_two":"16629997061512","email":"rebecca.gleichner@example.org","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:03:33","links":[{"rel":"self","uri":"\/groups\/fb31f47e-f29e-323c-8f49-5184d4e58702"}]}}},{"id":"565ea0dd-6328-41f5-a35f-12c259f227e7","group_id":"23b31bee-a37a-3d03-98ac-cafaf4b9bc90","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"1f9bfc36-527f-4c59-9b9b-28fa7c9336a0","rep":"Camille Toy","spots":52,"status":"active","starting_cost":"1840.00","companion_limit":0,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"leader","difficulty":"level 3","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["medical professionals","business professionals","adults","men"],"team_roles":["DENA","MDFG","OTEC","CHRA"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":true,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:02:05","updated_at":"2017-05-05 15:02:16","tags":[],"links":[{"rel":"self","uri":"\/trips\/565ea0dd-6328-41f5-a35f-12c259f227e7"}],"group":{"data":{"id":"23b31bee-a37a-3d03-98ac-cafaf4b9bc90","status":"approved","name":"Wiza-Collins","type":"other","timezone":"America\/Juneau","description":"The master was an immense length of neck, which seemed to Alice for some way, and nothing seems to suit them!' 'I.","url":"wiza-collins","public":true,"address_one":null,"address_two":"39734","city":"Pfefferfort","state":null,"zip":null,"country_code":"kh","country_name":"Cambodia","phone_one":"649964496866352","phone_two":"","email":"larue.lueilwitz@example.com","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:02:16","links":[{"rel":"self","uri":"\/groups\/23b31bee-a37a-3d03-98ac-cafaf4b9bc90"}]}}},{"id":"5d1edcb2-99f5-498d-9b86-da9971aa1b0d","group_id":"e05fc7d1-ab3b-35bb-bd48-8365e54d7d7e","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"e3296b90-fe7a-43e1-83e9-7adf09f5cb57","rep":"Norval Larkin","spots":192,"status":"active","starting_cost":"1759.00","companion_limit":2,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"international","difficulty":"level 3","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["adults","business professionals","pastors","medical professionals"],"team_roles":["NTEC","RDIO","PHYT","ODOC"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":true,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:03:00","updated_at":"2017-05-05 15:03:11","tags":[],"links":[{"rel":"self","uri":"\/trips\/5d1edcb2-99f5-498d-9b86-da9971aa1b0d"}],"group":{"data":{"id":"e05fc7d1-ab3b-35bb-bd48-8365e54d7d7e","status":"approved","name":"Ruecker, Gerlach and Paucek","type":"nonprofit","timezone":"Asia\/Baku","description":"And mentioned me to him: She gave me a pair of the shepherd boy--and the sneeze of the tea--' 'The twinkling of the.","url":"ruecker-gerlach-and-paucek","public":true,"address_one":"67251 Smith Overpass Apt. 318","address_two":null,"city":null,"state":null,"zip":"05589-5101","country_code":"tv","country_name":"Tuvalu","phone_one":"975420450588447","phone_two":"","email":"leo.mcclure@example.com","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:03:11","links":[{"rel":"self","uri":"\/groups\/e05fc7d1-ab3b-35bb-bd48-8365e54d7d7e"}]}}},{"id":"5d62d07d-14e8-4c50-9067-3ee09e5cf437","group_id":"120d15bb-e82a-3e40-9a55-a1c22b6b3ade","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"656cadd3-8138-4faf-a972-a1951f3f329c","rep":"Manuel Gusikowski","spots":91,"status":"active","starting_cost":"1888.00","companion_limit":2,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"leader","difficulty":"level 1","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["pastors","adults","men","families"],"team_roles":["TMLR","POLI","CRDO","LACT"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":true,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:01:55","updated_at":"2017-05-05 15:01:58","tags":[],"links":[{"rel":"self","uri":"\/trips\/5d62d07d-14e8-4c50-9067-3ee09e5cf437"}],"group":{"data":{"id":"120d15bb-e82a-3e40-9a55-a1c22b6b3ade","status":"approved","name":"Stoltenberg-Cormier","type":"youth","timezone":"America\/Kentucky\/Monticello","description":"Cheshire Cat,' said Alice: '--where's the Duchess?' 'Hush! Hush!' said the Rabbit in a low, hurried tone. He looked at.","url":"stoltenberg-cormier","public":true,"address_one":"6925 Zachariah Estate","address_two":"21801","city":"East Jane","state":"Oklahoma","zip":null,"country_code":"br","country_name":"Brazil","phone_one":"14859053488","phone_two":"8544454907","email":"amira41@example.net","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:02:05","links":[{"rel":"self","uri":"\/groups\/120d15bb-e82a-3e40-9a55-a1c22b6b3ade"}]}}},{"id":"67a6bea8-152b-4641-9519-2d6843b260ab","group_id":"23b31bee-a37a-3d03-98ac-cafaf4b9bc90","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"ca6119f7-9070-4f8f-b994-90fe9706fbbd","rep":"Bennie Grady","spots":122,"status":"active","starting_cost":"1894.00","companion_limit":2,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"leader","difficulty":"level 3","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["women","medical professionals","pastors","men"],"team_roles":["DENH","INFL","MDSG","POLI"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":true,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:02:05","updated_at":"2017-05-05 15:02:09","tags":[],"links":[{"rel":"self","uri":"\/trips\/67a6bea8-152b-4641-9519-2d6843b260ab"}],"group":{"data":{"id":"23b31bee-a37a-3d03-98ac-cafaf4b9bc90","status":"approved","name":"Wiza-Collins","type":"other","timezone":"America\/Juneau","description":"The master was an immense length of neck, which seemed to Alice for some way, and nothing seems to suit them!' 'I.","url":"wiza-collins","public":true,"address_one":null,"address_two":"39734","city":"Pfefferfort","state":null,"zip":null,"country_code":"kh","country_name":"Cambodia","phone_one":"649964496866352","phone_two":"","email":"larue.lueilwitz@example.com","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:02:16","links":[{"rel":"self","uri":"\/groups\/23b31bee-a37a-3d03-98ac-cafaf4b9bc90"}]}}},{"id":"6ac5c486-00e9-425b-ade2-cc59b8dc6a8b","group_id":"4bbde7eb-dfe2-3b08-84be-f3bcad4c969a","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"415379bd-6cb7-413c-a5c5-ebb41143b68e","rep":"Bailey Wuckert","spots":479,"status":"active","starting_cost":"1850.00","companion_limit":2,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"media","difficulty":"level 1","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["teens","adults","women","media professionals"],"team_roles":["PHAR","PHAT","CHRA","NUTR"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":true,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:02:38","updated_at":"2017-05-05 15:02:49","tags":[],"links":[{"rel":"self","uri":"\/trips\/6ac5c486-00e9-425b-ade2-cc59b8dc6a8b"}],"group":{"data":{"id":"4bbde7eb-dfe2-3b08-84be-f3bcad4c969a","status":"approved","name":"Toy-Braun","type":"business","timezone":"America\/Porto_Velho","description":"I was going a journey, I should think you'll feel it a little ledge of rock, and, as there was silence for some.","url":"toy-braun","public":true,"address_one":"488 Mattie Mountain Apt. 518","address_two":"45254","city":null,"state":null,"zip":null,"country_code":"ie","country_name":"Ireland","phone_one":"3285255388","phone_two":"9218561719260","email":"hjerde@example.org","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:02:49","links":[{"rel":"self","uri":"\/groups\/4bbde7eb-dfe2-3b08-84be-f3bcad4c969a"}]}}},{"id":"7ca31072-a948-47a3-93f2-f7210b95110d","group_id":"e05fc7d1-ab3b-35bb-bd48-8365e54d7d7e","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"faf7fa4d-9ef6-418c-8fb8-29f8482db678","rep":"Sherwood Mueller","spots":468,"status":"active","starting_cost":"1819.00","companion_limit":1,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"medical","difficulty":"level 3","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["media professionals","men","business professionals","families"],"team_roles":["MDSD","INFL","REGN","LVNN"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":true,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:03:00","updated_at":"2017-05-05 15:03:07","tags":[],"links":[{"rel":"self","uri":"\/trips\/7ca31072-a948-47a3-93f2-f7210b95110d"}],"group":{"data":{"id":"e05fc7d1-ab3b-35bb-bd48-8365e54d7d7e","status":"approved","name":"Ruecker, Gerlach and Paucek","type":"nonprofit","timezone":"Asia\/Baku","description":"And mentioned me to him: She gave me a pair of the shepherd boy--and the sneeze of the tea--' 'The twinkling of the.","url":"ruecker-gerlach-and-paucek","public":true,"address_one":"67251 Smith Overpass Apt. 318","address_two":null,"city":null,"state":null,"zip":"05589-5101","country_code":"tv","country_name":"Tuvalu","phone_one":"975420450588447","phone_two":"","email":"leo.mcclure@example.com","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:03:11","links":[{"rel":"self","uri":"\/groups\/e05fc7d1-ab3b-35bb-bd48-8365e54d7d7e"}]}}},{"id":"840429d8-434b-4da9-98fe-ad2e385c6d97","group_id":"0ac60e11-f324-3be5-9995-9a28c121c69f","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"26091dcf-05a1-4332-b8e7-86c513401ff4","rep":"Sidney Hintz","spots":22,"status":"active","starting_cost":"1713.00","companion_limit":2,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"family","difficulty":"level 3","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["media professionals","medical professionals","business professionals","pastors"],"team_roles":["MEDA","MDSP","PHAA","OTEC"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":true,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:01:51","tags":[],"links":[{"rel":"self","uri":"\/trips\/840429d8-434b-4da9-98fe-ad2e385c6d97"}],"group":{"data":{"id":"0ac60e11-f324-3be5-9995-9a28c121c69f","status":"approved","name":"Osinski, Casper and Howe","type":"youth","timezone":"Antarctica\/Syowa","description":"Alice. The poor little thing sobbed again (or grunted, it was only a mouse that had made the whole party at once.","url":"osinski-casper-and-howe","public":true,"address_one":null,"address_two":"1003","city":null,"state":"South Dakota","zip":"28947","country_code":"ne","country_name":"Niger","phone_one":"13839045588","phone_two":"1632640203113775","email":"mueller.toni@example.org","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:23:40","links":[{"rel":"self","uri":"\/groups\/0ac60e11-f324-3be5-9995-9a28c121c69f"}]}}},{"id":"9012c07e-f5d0-4900-ab9a-d62e0aac7e74","group_id":"23b31bee-a37a-3d03-98ac-cafaf4b9bc90","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"04b56cd6-bbf1-498a-8555-e468af9148b9","rep":"Matteo Hilll","spots":351,"status":"active","starting_cost":"1819.00","companion_limit":2,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"international","difficulty":"level 2","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["pastors","adults","media professionals","medical professionals"],"team_roles":["ANES","HEDU","MDSN","OAST"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":true,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:02:05","updated_at":"2017-05-05 15:02:12","tags":[],"links":[{"rel":"self","uri":"\/trips\/9012c07e-f5d0-4900-ab9a-d62e0aac7e74"}],"group":{"data":{"id":"23b31bee-a37a-3d03-98ac-cafaf4b9bc90","status":"approved","name":"Wiza-Collins","type":"other","timezone":"America\/Juneau","description":"The master was an immense length of neck, which seemed to Alice for some way, and nothing seems to suit them!' 'I.","url":"wiza-collins","public":true,"address_one":null,"address_two":"39734","city":"Pfefferfort","state":null,"zip":null,"country_code":"kh","country_name":"Cambodia","phone_one":"649964496866352","phone_two":"","email":"larue.lueilwitz@example.com","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:02:16","links":[{"rel":"self","uri":"\/groups\/23b31bee-a37a-3d03-98ac-cafaf4b9bc90"}]}}},{"id":"910985f1-a042-44ea-97bf-5efa730a02f3","group_id":"e73e385a-435c-3ff1-a45c-2eb1db19a92b","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"f2c607c6-f249-4f27-825d-0809879b60f3","rep":"Garrison Conn","spots":396,"status":"active","starting_cost":"1872.00","companion_limit":2,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"ministry","difficulty":"level 3","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["families","business professionals","teens","men"],"team_roles":["DENT","SSPK","DENA","DENH"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":true,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:03:11","updated_at":"2017-05-05 15:03:22","tags":[],"links":[{"rel":"self","uri":"\/trips\/910985f1-a042-44ea-97bf-5efa730a02f3"}],"group":{"data":{"id":"e73e385a-435c-3ff1-a45c-2eb1db19a92b","status":"approved","name":"Beatty, Murazik and Kutch","type":"other","timezone":"Asia\/Dubai","description":"Gryphon. 'Then, you know,' Alice gently remarked; 'they'd have been that,' said Alice. 'Of course they were', said the.","url":"beatty-murazik-and-kutch","public":true,"address_one":null,"address_two":null,"city":"North Leanne","state":null,"zip":"21559-1491","country_code":"bl","country_name":"","phone_one":"13455943265","phone_two":"13644397912","email":"mcclure.vernice@example.org","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:03:22","links":[{"rel":"self","uri":"\/groups\/e73e385a-435c-3ff1-a45c-2eb1db19a92b"}]}}},{"id":"a5b14e17-5e84-4cc3-a970-95f2cbef0bcc","group_id":"23c03227-1747-3f13-9550-b36c5bed17c4","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"255e9093-81d9-4b72-9991-30fbaa698a21","rep":"Rosalia Schimmel","spots":62,"status":"active","starting_cost":"1718.00","companion_limit":0,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"medical","difficulty":"level 3","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["pastors","media professionals","adults","men"],"team_roles":["MDSD","INFL","OAST","MDPF"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":true,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:02:16","updated_at":"2017-05-05 15:02:27","tags":[],"links":[{"rel":"self","uri":"\/trips\/a5b14e17-5e84-4cc3-a970-95f2cbef0bcc"}],"group":{"data":{"id":"23c03227-1747-3f13-9550-b36c5bed17c4","status":"approved","name":"Bergnaum-Bosco","type":"business","timezone":"Pacific\/Nauru","description":"English coast you find a pleasure in all my life, never!' They had not noticed before, and behind it, it occurred to.","url":"bergnaum-bosco","public":true,"address_one":"22567 Reilly Rest","address_two":null,"city":null,"state":"Michigan","zip":"99885","country_code":"no","country_name":"Norway","phone_one":"19326681524","phone_two":"5712965024","email":"blaise.gaylord@example.net","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:02:27","links":[{"rel":"self","uri":"\/groups\/23c03227-1747-3f13-9550-b36c5bed17c4"}]}}},{"id":"b3043124-de21-46f9-95b8-0a75a0687148","group_id":"120d15bb-e82a-3e40-9a55-a1c22b6b3ade","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"935f7c48-09fb-4b19-b3f7-a4070f55e7a1","rep":"Riley Leuschke","spots":145,"status":"active","starting_cost":"1787.00","companion_limit":0,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"ministry","difficulty":"level 1","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["media professionals","business professionals","medical professionals","women"],"team_roles":["GPLR","PHYT","CHRA","OTEC"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":true,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:01:55","updated_at":"2017-05-05 15:02:05","tags":[],"links":[{"rel":"self","uri":"\/trips\/b3043124-de21-46f9-95b8-0a75a0687148"}],"group":{"data":{"id":"120d15bb-e82a-3e40-9a55-a1c22b6b3ade","status":"approved","name":"Stoltenberg-Cormier","type":"youth","timezone":"America\/Kentucky\/Monticello","description":"Cheshire Cat,' said Alice: '--where's the Duchess?' 'Hush! Hush!' said the Rabbit in a low, hurried tone. He looked at.","url":"stoltenberg-cormier","public":true,"address_one":"6925 Zachariah Estate","address_two":"21801","city":"East Jane","state":"Oklahoma","zip":null,"country_code":"br","country_name":"Brazil","phone_one":"14859053488","phone_two":"8544454907","email":"amira41@example.net","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:02:05","links":[{"rel":"self","uri":"\/groups\/120d15bb-e82a-3e40-9a55-a1c22b6b3ade"}]}}},{"id":"b60a5efb-97d0-4642-a067-414879b2ecb3","group_id":"fb31f47e-f29e-323c-8f49-5184d4e58702","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"a0f11e28-7e40-443f-8225-990c0ea00830","rep":"Woodrow Maggio","spots":490,"status":"active","starting_cost":"1807.00","companion_limit":2,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"international","difficulty":"level 2","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["media professionals","adults","pastors","men"],"team_roles":["PHAR","ETEC","MEDI","MCDR"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":false,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:03:22","updated_at":"2017-05-05 15:03:26","tags":[],"links":[{"rel":"self","uri":"\/trips\/b60a5efb-97d0-4642-a067-414879b2ecb3"}],"group":{"data":{"id":"fb31f47e-f29e-323c-8f49-5184d4e58702","status":"approved","name":"Strosin, Kutch and Koelpin","type":"church","timezone":"Asia\/Kuching","description":"Alice, (she had grown to her ear. 'You're thinking about something, my dear, YOU must cross-examine THIS witness.'.","url":"strosin-kutch-and-koelpin","public":true,"address_one":null,"address_two":null,"city":"Veummouth","state":null,"zip":"60031","country_code":"dm","country_name":"Dominica","phone_one":"16509796644","phone_two":"16629997061512","email":"rebecca.gleichner@example.org","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:03:33","links":[{"rel":"self","uri":"\/groups\/fb31f47e-f29e-323c-8f49-5184d4e58702"}]}}},{"id":"bc9d256c-2268-435f-b737-9b8d5a939a48","group_id":"4bbde7eb-dfe2-3b08-84be-f3bcad4c969a","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"6768f62a-7bf4-436c-bc1b-946c02467eec","rep":"Nayeli Graham","spots":96,"status":"active","starting_cost":"1839.00","companion_limit":0,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"media","difficulty":"level 1","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["men","teens","medical professionals","pastors"],"team_roles":["MCDR","PRAY","ANES","PRDR"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":true,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:02:38","updated_at":"2017-05-05 15:02:45","tags":[],"links":[{"rel":"self","uri":"\/trips\/bc9d256c-2268-435f-b737-9b8d5a939a48"}],"group":{"data":{"id":"4bbde7eb-dfe2-3b08-84be-f3bcad4c969a","status":"approved","name":"Toy-Braun","type":"business","timezone":"America\/Porto_Velho","description":"I was going a journey, I should think you'll feel it a little ledge of rock, and, as there was silence for some.","url":"toy-braun","public":true,"address_one":"488 Mattie Mountain Apt. 518","address_two":"45254","city":null,"state":null,"zip":null,"country_code":"ie","country_name":"Ireland","phone_one":"3285255388","phone_two":"9218561719260","email":"hjerde@example.org","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:02:49","links":[{"rel":"self","uri":"\/groups\/4bbde7eb-dfe2-3b08-84be-f3bcad4c969a"}]}}},{"id":"c5fc8227-4363-4f41-bdea-c1348b346554","group_id":"23c03227-1747-3f13-9550-b36c5bed17c4","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"05791f96-b4b9-41bd-9611-c2e3ec655a59","rep":"Hazel Langosh","spots":28,"status":"active","starting_cost":"1785.00","companion_limit":2,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"media","difficulty":"level 1","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["women","adults","men","pastors"],"team_roles":["PRDR","RDIO","OTEC","ODOC"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":true,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:02:16","updated_at":"2017-05-05 15:02:20","tags":[],"links":[{"rel":"self","uri":"\/trips\/c5fc8227-4363-4f41-bdea-c1348b346554"}],"group":{"data":{"id":"23c03227-1747-3f13-9550-b36c5bed17c4","status":"approved","name":"Bergnaum-Bosco","type":"business","timezone":"Pacific\/Nauru","description":"English coast you find a pleasure in all my life, never!' They had not noticed before, and behind it, it occurred to.","url":"bergnaum-bosco","public":true,"address_one":"22567 Reilly Rest","address_two":null,"city":null,"state":"Michigan","zip":"99885","country_code":"no","country_name":"Norway","phone_one":"19326681524","phone_two":"5712965024","email":"blaise.gaylord@example.net","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:02:27","links":[{"rel":"self","uri":"\/groups\/23c03227-1747-3f13-9550-b36c5bed17c4"}]}}},{"id":"c88c9cc8-a6f5-4893-9293-5a6adc4fe2f7","group_id":"24e0426f-0a8e-3408-bdd7-4ee758ebf018","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"7a01dab7-876d-40aa-bbbe-abe75277e9bf","rep":"Mohammed Haag","spots":199,"status":"active","starting_cost":"1768.00","companion_limit":3,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"leader","difficulty":"level 2","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["men","pastors","adults","teens"],"team_roles":["MISS","ANES","LACT","DENH"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":true,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:02:27","updated_at":"2017-05-05 15:02:38","tags":[],"links":[{"rel":"self","uri":"\/trips\/c88c9cc8-a6f5-4893-9293-5a6adc4fe2f7"}],"group":{"data":{"id":"24e0426f-0a8e-3408-bdd7-4ee758ebf018","status":"approved","name":"Krajcik, Eichmann and Botsford","type":"church","timezone":"Africa\/Djibouti","description":"Alice, 'when one wasn't always growing larger and smaller, and being so many different sizes in a tone of this sort in.","url":"krajcik-eichmann-and-botsford","public":false,"address_one":"95045 Leopold Road","address_two":null,"city":"North Hunter","state":null,"zip":null,"country_code":"by","country_name":"Belarus","phone_one":"2602806653","phone_two":"6356231845","email":"alva.considine@example.com","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:02:38","links":[{"rel":"self","uri":"\/groups\/24e0426f-0a8e-3408-bdd7-4ee758ebf018"}]}}},{"id":"d580ad31-0de1-48ec-a6f2-c666177a4049","group_id":"24e0426f-0a8e-3408-bdd7-4ee758ebf018","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"fac66d2b-0ca8-4452-b19a-dcd74d58a8c2","rep":"Walter Sauer","spots":303,"status":"active","starting_cost":"1807.00","companion_limit":2,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"family","difficulty":"level 1","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["medical professionals","business professionals","women","teens"],"team_roles":["NUTR","MDSP","PHAR","DIET"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":true,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:02:27","updated_at":"2017-05-05 15:02:31","tags":[],"links":[{"rel":"self","uri":"\/trips\/d580ad31-0de1-48ec-a6f2-c666177a4049"}],"group":{"data":{"id":"24e0426f-0a8e-3408-bdd7-4ee758ebf018","status":"approved","name":"Krajcik, Eichmann and Botsford","type":"church","timezone":"Africa\/Djibouti","description":"Alice, 'when one wasn't always growing larger and smaller, and being so many different sizes in a tone of this sort in.","url":"krajcik-eichmann-and-botsford","public":false,"address_one":"95045 Leopold Road","address_two":null,"city":"North Hunter","state":null,"zip":null,"country_code":"by","country_name":"Belarus","phone_one":"2602806653","phone_two":"6356231845","email":"alva.considine@example.com","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:02:38","links":[{"rel":"self","uri":"\/groups\/24e0426f-0a8e-3408-bdd7-4ee758ebf018"}]}}},{"id":"dac0bffe-3c4a-41a5-951d-2661efa863f0","group_id":"24e0426f-0a8e-3408-bdd7-4ee758ebf018","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"43fe255a-0ac7-444a-862f-2974086fb03e","rep":"Aliza Deckow","spots":212,"status":"active","starting_cost":"1714.00","companion_limit":1,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"media","difficulty":"level 3","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["teens","media professionals","adults","families"],"team_roles":["HEDU","PHAT","LPNN","RESP"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":true,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:02:27","updated_at":"2017-05-05 15:02:34","tags":[],"links":[{"rel":"self","uri":"\/trips\/dac0bffe-3c4a-41a5-951d-2661efa863f0"}],"group":{"data":{"id":"24e0426f-0a8e-3408-bdd7-4ee758ebf018","status":"approved","name":"Krajcik, Eichmann and Botsford","type":"church","timezone":"Africa\/Djibouti","description":"Alice, 'when one wasn't always growing larger and smaller, and being so many different sizes in a tone of this sort in.","url":"krajcik-eichmann-and-botsford","public":false,"address_one":"95045 Leopold Road","address_two":null,"city":"North Hunter","state":null,"zip":null,"country_code":"by","country_name":"Belarus","phone_one":"2602806653","phone_two":"6356231845","email":"alva.considine@example.com","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:02:38","links":[{"rel":"self","uri":"\/groups\/24e0426f-0a8e-3408-bdd7-4ee758ebf018"}]}}},{"id":"dfa5b4ac-0608-44c8-90c5-e2dc15ecc548","group_id":"95922801-d4a1-35d7-a5e1-100f4e7f0594","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"517ea8ae-c142-420a-aaea-ffeaf5196218","rep":"Kaylin Considine","spots":437,"status":"active","starting_cost":"1873.00","companion_limit":1,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"media","difficulty":"level 1","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["business professionals","adults","medical professionals","families"],"team_roles":["MDSG","MCDR","MDSN","NUTR"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":true,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:02:49","updated_at":"2017-05-05 15:02:53","tags":[],"links":[{"rel":"self","uri":"\/trips\/dfa5b4ac-0608-44c8-90c5-e2dc15ecc548"}],"group":{"data":{"id":"95922801-d4a1-35d7-a5e1-100f4e7f0594","status":"approved","name":"Fahey PLC","type":"business","timezone":"America\/Adak","description":"I eat\" is the capital of Paris, and Paris is the same tone, exactly as if she could even make out which were the.","url":"fahey-plc","public":true,"address_one":"4866 Dietrich Rapids Suite 577","address_two":null,"city":null,"state":null,"zip":null,"country_code":"bg","country_name":"Bulgaria","phone_one":"5973088268","phone_two":"2465546493739","email":"larkin.avery@example.com","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:03:00","links":[{"rel":"self","uri":"\/groups\/95922801-d4a1-35d7-a5e1-100f4e7f0594"}]}}},{"id":"e2d3a383-58b9-434e-a6d5-22062395f3a7","group_id":"e73e385a-435c-3ff1-a45c-2eb1db19a92b","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"41e21866-80fb-4bb8-afcd-401087a70710","rep":"Lily Conroy","spots":284,"status":"active","starting_cost":"1754.00","companion_limit":2,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"family","difficulty":"level 1","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["women","business professionals","men","medical professionals"],"team_roles":["MDSN","ETEC","DENT","DENH"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":true,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:03:11","updated_at":"2017-05-05 15:03:18","tags":[],"links":[{"rel":"self","uri":"\/trips\/e2d3a383-58b9-434e-a6d5-22062395f3a7"}],"group":{"data":{"id":"e73e385a-435c-3ff1-a45c-2eb1db19a92b","status":"approved","name":"Beatty, Murazik and Kutch","type":"other","timezone":"Asia\/Dubai","description":"Gryphon. 'Then, you know,' Alice gently remarked; 'they'd have been that,' said Alice. 'Of course they were', said the.","url":"beatty-murazik-and-kutch","public":true,"address_one":null,"address_two":null,"city":"North Leanne","state":null,"zip":"21559-1491","country_code":"bl","country_name":"","phone_one":"13455943265","phone_two":"13644397912","email":"mcclure.vernice@example.org","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:03:22","links":[{"rel":"self","uri":"\/groups\/e73e385a-435c-3ff1-a45c-2eb1db19a92b"}]}}},{"id":"f4fd2275-d972-4323-979f-2099ea17a15a","group_id":"e05fc7d1-ab3b-35bb-bd48-8365e54d7d7e","campaign_id":"5830c58b-a183-49ec-a61e-a3c748b33c28","rep_id":"63bb2ba9-87f9-48ea-b55a-b613fecb0283","rep":"Bianka Emard","spots":61,"status":"active","starting_cost":"1727.00","companion_limit":2,"reservations":0,"country_code":"ni","country_name":"Nicaragua","type":"ministry","difficulty":"level 2","started_at":"2017-07-22","ended_at":"2017-07-30","todos":["send shirt","send wrist band","enter into lgl","send launch guide","send luggage tag"],"prospects":["men","adults","medical professionals","women"],"team_roles":["DENA","MDOC","LVNN","PRAY"],"description":"### WHAT TO EXPECT\nWHO\n+ This trip is for anyone not traveling with a group or home church flying from the Eastern, Central or Mountain US timezones.\n\nWHEN\n+ The full week trip experience July 22-30, 2017.\n+ We take you from an epic day of training in Miami to the beautiful landscapes of Nicaragua. You'll spend Monday - Thursday sharing Jesus in schools then enjoy a Free Day with your team on Friday. On Saturday unite with your state and make history at the national 1Nation1Day event.\n\nHOW\n+ Each day you'll be teamed up with 25 of your new best friends under the supervision of highly trained Team Leaders.\n+ Travel across your state and experience new cities, villages, neighborhoods and culture.\n+ At each site, your team will perform impacting dramas, share testimonies, catch a baseball, shoot hoops, pray, share a message of hope, and inspire the dreams of the next generation.\n\nROLES\n+ All non-medical roles\n\n### WHAT'S INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n+ All training materials\n+ Team t-shirt\n\nMIAMI HQ\n+ Airport shuttle from MIA airport to the Miami Airport Marriott Campus\n+ Housing\/hotel accommodations for one evening at a Miami Hotel on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n+ Lunch (12pm), Dinner (5pm) and bottled water in Miami beginning on either July 21 (Western and International Missionaries) or July 22 (Eastern Missionaries)\n\nNICARAGUA\n+ Round-trip international flight from MIA (Miami, FL) to MGA (Managua, Nicaragua) July 23-30\n+ Hotel accommodations July 23-30\n+ All international bus transportation to\/from airports and to\/from ministry sites July 23-30\n+ Daily meals and bottled water while in Nicaragua July 23-30\n+ All immigration entry and exit fees\n\n### WHAT'S NOT INCLUDED IN MY TRIP REGISTRATION?\nPRE-TRIP\n- Passport: Apply for your passport no later then 6 months out from trip start date\n\nMIAMI HQ\n- Domestic flight or transportation to\/from your hometown to Miami HQ\n- Any hotel accommodations in Miami before or after July 22\n\nNICARAGUA\n- Hotel accommodations before July 23 or after July 30\n- Meals before 12pm July 22 or after landing back at MIA on July 30\n- Snacks\/Meals in all transit airports\n- Souvenirs\/Internet\/Wi-fi\/Computer Usage\/Internet Cafe\/Anything on the packing list that is forgotten\n\n### PRE-TRIP TRAINING\nYour Trip Representative will be contacting you regarding dates and times for team meetings, conference calls and training sessions.\n\nMissions.Me will begin holding ministry training sessions in April 2017 at:\nOakland Church\n5100 N. Adams Rd.\nOakland Township, MI 48306","public":true,"published_at":"2016-02-01 00:00:00","closed_at":"2017-07-15 00:00:00","created_at":"2017-05-05 15:03:00","updated_at":"2017-05-05 15:03:04","tags":[],"links":[{"rel":"self","uri":"\/trips\/f4fd2275-d972-4323-979f-2099ea17a15a"}],"group":{"data":{"id":"e05fc7d1-ab3b-35bb-bd48-8365e54d7d7e","status":"approved","name":"Ruecker, Gerlach and Paucek","type":"nonprofit","timezone":"Asia\/Baku","description":"And mentioned me to him: She gave me a pair of the shepherd boy--and the sneeze of the tea--' 'The twinkling of the.","url":"ruecker-gerlach-and-paucek","public":true,"address_one":"67251 Smith Overpass Apt. 318","address_two":null,"city":null,"state":null,"zip":"05589-5101","country_code":"tv","country_name":"Tuvalu","phone_one":"975420450588447","phone_two":"","email":"leo.mcclure@example.com","avatar":"https:\/\/missions.dev\/images\/placeholders\/logo-placeholder.png","banner":null,"reservations_count":75,"created_at":"2017-05-05 15:01:44","updated_at":"2017-05-05 15:03:11","links":[{"rel":"self","uri":"\/groups\/e05fc7d1-ab3b-35bb-bd48-8365e54d7d7e"}]}}}]}}};

        return {
            body: body,
            status: 200,
            statusText: 'OK',
            headers: {/*headers*/},
            delay: Settings.delay, // millisecond
        }

    },

    // Utilities API
    ['GET *utilities/activities/types'] (pathMatch, query, request) {
        let body = [{
            "id": "e3efa15d-d4c5-3d5a-a562-9dd84cd89290",
            "name": "arrival"
        }, {
            "id": "a2d80ae5-b8ac-3368-93ae-eb6748e6b9d6",
            "name": "connection"
        }, {"id": "1282bca0-3e6d-3a42-b821-13437fd75603", "name": "departure"}];

        return {
            body: body,
            status: 200,
            statusText: 'OK',
            headers: {/*headers*/},
            delay: Settings.delay, // millisecond
        }

    },

    ['GET *utilities/airports'] (pathMatch, query, request) {
        let body = {
            "data": [{
                "id": "2b93a716-b5cf-4d3b-b8bf-217953fc3540",
                "name": "Brookneal\/Campbell County Airport",
                "city": "Brookneal",
                "country": "United States",
                "iata": "0V4",
                "icao": "K0V4",
                "x": -79.0164031982,
                "y": 37.1417007446,
                "elevation": 596
            }, {
                "id": "7ae805b3-baff-4316-a6c7-8d9b6138f457",
                "name": "Sublette Municipal Airport",
                "city": "Sublette",
                "country": "United States",
                "iata": "19S",
                "icao": "K19S",
                "x": -100.8300018,
                "y": 37.49140167,
                "elevation": 2908
            }, {
                "id": "2d4dc79d-519c-4c7d-9676-3fd8b80a9286",
                "name": "Clarke County Airport",
                "city": "Quitman",
                "country": "United States",
                "iata": "23M",
                "icao": "K23M",
                "x": -88.738899231,
                "y": 32.0848999023,
                "elevation": 320
            }, {
                "id": "0e53f897-08fa-4764-b653-bdca7c85affd",
                "name": "Causey Airport",
                "city": "Liberty",
                "country": "United States",
                "iata": "2A5",
                "icao": "K2A5",
                "x": -79.617599487305,
                "y": 35.911800384521,
                "elevation": 723
            }, {
                "id": "439942ef-6a75-4e81-9daa-19c26726ed3f",
                "name": "Shelby County Airport",
                "city": "Shelbyville",
                "country": "United States",
                "iata": "2H0",
                "icao": "K2H0",
                "x": -88.8453979492,
                "y": 39.4104003906,
                "elevation": 618
            }, {
                "id": "63e477a4-3f1b-4fc1-9796-e3b92e6b855c",
                "name": "Neodesha Municipal Airport",
                "city": "Neodesha",
                "country": "United States",
                "iata": "2K7",
                "icao": "K2K7",
                "x": -95.646102905273,
                "y": 37.435398101807,
                "elevation": 841
            }, {
                "id": "d991629e-7df0-45b7-851d-618c8ed278ea",
                "name": "Augusta Municipal Airport",
                "city": "Augusta",
                "country": "United States",
                "iata": "3AU",
                "icao": "K3AU",
                "x": -97.077903747559,
                "y": 37.671600341797,
                "elevation": 1328
            }, {
                "id": "f9f7358a-f128-4fca-9781-6301c3a5f0b9",
                "name": "Atlanta South Regional Airport\/Tara Field",
                "city": "Hampton",
                "country": "United States",
                "iata": "4A7",
                "icao": "K4A7",
                "x": -84.332397,
                "y": 33.389099,
                "elevation": 874
            }, {
                "id": "e92d31f6-bfee-44de-ad24-4d76e9fcdd4f",
                "name": "Dell Flight Strip",
                "city": "Dell",
                "country": "United States",
                "iata": "4U9",
                "icao": "K4U9",
                "x": -112.720001221,
                "y": 44.7356987,
                "elevation": 6007
            }, {
                "id": "49e07bbc-ba7a-4c9c-a913-4469b5d434b2",
                "name": "Madison Municipal Airport",
                "city": "Madison",
                "country": "United States",
                "iata": "52A",
                "icao": "K52A",
                "x": -83.4604034424,
                "y": 33.6120986938,
                "elevation": 694
            }, {
                "id": "509b2c8f-99fc-4e0e-94a0-1be37efb916c",
                "name": "East Troy Municipal Airport",
                "city": "East Troy",
                "country": "United States",
                "iata": "57C",
                "icao": "K57C",
                "x": -88.372596740723,
                "y": 42.797199249268,
                "elevation": 860
            }, {
                "id": "6c0e77c9-4689-4772-9e86-a8874562c0fb",
                "name": "Saratoga County Airport",
                "city": "Ballston Spa",
                "country": "United States",
                "iata": "5B2",
                "icao": "K5B2",
                "x": -73.86119843,
                "y": 43.05130005,
                "elevation": 434
            }, {
                "id": "3572f702-114f-4fd4-8160-203d9ebd05c0",
                "name": "Saluda County Airport",
                "city": "Saluda",
                "country": "United States",
                "iata": "6J4",
                "icao": "K6J4",
                "x": -81.79460144043,
                "y": 33.92679977417,
                "elevation": 555
            }, {
                "id": "511d2e39-de50-49fd-ab07-18f2ec24f467",
                "name": "Big Timber Airport",
                "city": "Big Timber",
                "country": "United States",
                "iata": "6S0",
                "icao": "K6S0",
                "x": -109.98100280762,
                "y": 45.806400299072,
                "elevation": 4492
            }, {
                "id": "3869fdd9-6664-4eba-8b64-8e1bc2e6fd83",
                "name": "Hyde County Airport",
                "city": "Engelhard",
                "country": "United States",
                "iata": "7W6",
                "icao": "K7W6",
                "x": -75.955200195312,
                "y": 35.562400817871,
                "elevation": 8
            }, {
                "id": "ba74b808-dabb-45b3-8fcc-3d18ad35b19f",
                "name": "El Dorado Springs Memorial Airport",
                "city": "El dorado springs",
                "country": "United States",
                "iata": "87K",
                "icao": "K87K",
                "x": -93.999099731445,
                "y": 37.856700897217,
                "elevation": 931
            }, {
                "id": "5684f0b2-e21e-4842-8e1b-80daf2f740e2",
                "name": "Ak-Chin Regional Airport",
                "city": "Phoenix",
                "country": "United States",
                "iata": "A39",
                "icao": "KA39",
                "x": -111.9185278,
                "y": 32.9908056,
                "elevation": 1300
            }, {
                "id": "fbeec782-44c1-4359-b04a-d252034fe6e7",
                "name": "Colorado Springs East Airport",
                "city": "Ellicott",
                "country": "United States",
                "iata": "A50",
                "icao": "KA50",
                "x": -104.41000366211,
                "y": 38.874401092529,
                "elevation": 6145
            }, {
                "id": "390adc3f-b5fc-436c-acbe-5bd01c889610",
                "name": "Anaa Airport",
                "city": "Anaa",
                "country": "French Polynesia",
                "iata": "AAA",
                "icao": "NTGA",
                "x": -145.50999450684,
                "y": -17.352600097656,
                "elevation": 10
            }, {
                "id": "9a0a4f5a-5f92-4959-aef3-16ec18396d09",
                "name": "El Arish International Airport",
                "city": "El Arish",
                "country": "Egypt",
                "iata": "AAC",
                "icao": "HEAR",
                "x": 33.8358001709,
                "y": 31.073299408,
                "elevation": 121
            }, {
                "id": "9f86bcbd-d15f-431b-80da-de8810a1bd98",
                "name": "Annaba Airport",
                "city": "Annaba",
                "country": "Algeria",
                "iata": "AAE",
                "icao": "DABB",
                "x": 7.8091697692871,
                "y": 36.822200775146,
                "elevation": 16
            }, {
                "id": "d13ddc10-9211-45ed-99b1-a966d3ef4ea6",
                "name": "Apalachicola Regional Airport",
                "city": "Apalachicola",
                "country": "United States",
                "iata": "AAF",
                "icao": "KAAF",
                "x": -85.02749634,
                "y": 29.72750092,
                "elevation": 20
            }, {
                "id": "9c386a0c-bfa6-4625-9414-cf34278386c1",
                "name": "Aachen-Merzbr\u00c3\u00bcck Airport",
                "city": "Aachen",
                "country": "Germany",
                "iata": "AAH",
                "icao": "EDKA",
                "x": 6.1863889694214,
                "y": 50.823055267334,
                "elevation": 623
            }, {
                "id": "ef9929f0-2044-4aea-98b5-3edecb6b828a",
                "name": "Buariki Airport",
                "city": "Buariki",
                "country": "Kiribati",
                "iata": "AAK",
                "icao": "NGUK",
                "x": 173.6369934082,
                "y": 0.18527799844742,
                "elevation": 0
            }, {
                "id": "3fc032b6-ebac-43bb-80a9-2caf3af269fb",
                "name": "Aalborg Airport",
                "city": "Aalborg",
                "country": "Denmark",
                "iata": "AAL",
                "icao": "EKYT",
                "x": 9.84924316406,
                "y": 57.0927589138,
                "elevation": 10
            }, {
                "id": "0b14bc9c-91a1-40a4-90dd-8117ff3c391f",
                "name": "Malamala Airport",
                "city": "Malamala",
                "country": "South Africa",
                "iata": "AAM",
                "icao": "FAMD",
                "x": 31.544599533081,
                "y": -24.818099975586,
                "elevation": 1124
            }, {
                "id": "7b8d1bc4-bf83-410e-8f72-2074c6bd1208",
                "name": "Al Ain International Airport",
                "city": "Al Ain",
                "country": "United Arab Emirates",
                "iata": "AAN",
                "icao": "OMAL",
                "x": 55.609199523926,
                "y": 24.261699676514,
                "elevation": 869
            }, {
                "id": "ade6497e-745a-40a0-a84a-a61a0dd1d96f",
                "name": "Anaco Airport",
                "city": "Anaco",
                "country": "Venezuela",
                "iata": "AAO",
                "icao": "SVAN",
                "x": -64.470726013184,
                "y": 9.4302253723145,
                "elevation": 721
            }, {
                "id": "fdbd3d92-a085-4a75-bd43-34be08b112df",
                "name": "Andrau Airpark",
                "city": "Houston",
                "country": "United States",
                "iata": "AAP",
                "icao": "KAAP",
                "x": -95.5883026123,
                "y": 29.7224998474,
                "elevation": 79
            }, {
                "id": "85accb17-53e6-4ad7-a099-26767347e4a8",
                "name": "Anapa Vityazevo Airport",
                "city": "Anapa",
                "country": "Russia",
                "iata": "AAQ",
                "icao": "URKA",
                "x": 37.347301483154,
                "y": 45.002101898193,
                "elevation": 174
            }, {
                "id": "d0213431-c1e4-4b6a-a373-5e0790290518",
                "name": "Aarhus Airport",
                "city": "Aarhus",
                "country": "Denmark",
                "iata": "AAR",
                "icao": "EKAH",
                "x": 10.6190004349,
                "y": 56.2999992371,
                "elevation": 82
            }, {
                "id": "f5a26794-2bae-42d9-b1ee-dfb58f2b4e98",
                "name": "Allah Valley Airport",
                "city": "Surallah",
                "country": "Philippines",
                "iata": "AAV",
                "icao": "RPMA",
                "x": 124.75099945068,
                "y": 6.366819858551,
                "elevation": 659
            }, {
                "id": "7fc11ca3-09a1-4bfe-81e4-7e732062a18c",
                "name": "Romeu Zema Airport",
                "city": "Araxa",
                "country": "Brazil",
                "iata": "AAX",
                "icao": "SBAX",
                "x": -46.960399627686,
                "y": -19.563199996948,
                "elevation": 3276
            }, {
                "id": "62c34a0a-22b0-417f-8b90-7876032a523a",
                "name": "Al Ghaidah International Airport",
                "city": "Al Ghaidah Intl",
                "country": "Yemen",
                "iata": "AAY",
                "icao": "OYGD",
                "x": 52.174999237061,
                "y": 16.191699981689,
                "elevation": 134
            }, {
                "id": "7a87438f-f455-4f24-95a5-abbaf259826f",
                "name": "Quezaltenango Airport",
                "city": "Quezaltenango",
                "country": "Guatemala",
                "iata": "AAZ",
                "icao": "MGQZ",
                "x": -91.501998901367,
                "y": 14.865599632263,
                "elevation": 7779
            }, {
                "id": "15b0abeb-b433-49e7-9472-60c7c12e7f9c",
                "name": "Abakan Airport",
                "city": "Abakan",
                "country": "Russia",
                "iata": "ABA",
                "icao": "UNAA",
                "x": 91.38500213623,
                "y": 53.740001678467,
                "elevation": 831
            }, {
                "id": "3b12900c-b2da-47f5-8f80-4090657b542b",
                "name": "Abadan Airport",
                "city": "Abadan",
                "country": "Iran",
                "iata": "ABD",
                "icao": "OIAA",
                "x": 48.2282981873,
                "y": 30.371099472,
                "elevation": 10
            }, {
                "id": "b15ca5fb-5e34-42d1-8622-56e1ce4a9b59",
                "name": "Lehigh Valley International Airport",
                "city": "Allentown",
                "country": "United States",
                "iata": "ABE",
                "icao": "KABE",
                "x": -75.440803527832,
                "y": 40.652099609375,
                "elevation": 393
            }, {
                "id": "0c50ad29-0559-42e3-afec-997fac0320e5",
                "name": "Abaiang Airport",
                "city": "Abaiang Atoll",
                "country": "Kiribati",
                "iata": "ABF",
                "icao": "NGAB",
                "x": 173.04100036621,
                "y": 1.7986099720001,
                "elevation": 0
            }, {
                "id": "c7a334ac-69b0-420d-bd51-3a353ff47496",
                "name": "Alpha Airport",
                "city": "Alpha",
                "country": "Australia",
                "iata": "ABH",
                "icao": "YAPH",
                "x": 146.584,
                "y": -23.646099,
                "elevation": 1255
            }, {
                "id": "44426532-a83d-4c9a-af33-0d59a7ae2a97",
                "name": "Abilene Regional Airport",
                "city": "Abilene",
                "country": "United States",
                "iata": "ABI",
                "icao": "KABI",
                "x": -99.6819000244,
                "y": 32.4113006592,
                "elevation": 1791
            }, {
                "id": "6b051892-6da8-4b3b-bfd4-887fd3baac02",
                "name": "Port Bouet Airport",
                "city": "Abidjan",
                "country": "Cote d'Ivoire",
                "iata": "ABJ",
                "icao": "DIAP",
                "x": -3.9262900352478,
                "y": 5.261390209198,
                "elevation": 21
            }, {
                "id": "f3f71bdd-f0ab-4cb6-bccb-a561ac728276",
                "name": "Kabri Dehar Airport",
                "city": "Kabri Dehar",
                "country": "Ethiopia",
                "iata": "ABK",
                "icao": "HAKD",
                "x": 44.252998352051,
                "y": 6.7340002059937,
                "elevation": 1800
            }, {
                "id": "845fec9c-57c9-4920-8498-69ceeadc8c31",
                "name": "Ambler Airport",
                "city": "Ambler",
                "country": "United States",
                "iata": "ABL",
                "icao": "PAFM",
                "x": -157.856994629,
                "y": 67.106300354,
                "elevation": 334
            }, {
                "id": "27855c4a-639c-41e4-8751-c15f83704118",
                "name": "Northern Peninsula Airport",
                "city": "Amberley",
                "country": "Australia",
                "iata": "ABM",
                "icao": "YBAM",
                "x": 142.459,
                "y": -10.9508,
                "elevation": 34
            }, {
                "id": "5ffe0fd5-8a6c-4345-b472-6f0bc5d31396",
                "name": "Albina Airport",
                "city": "Albina",
                "country": "Suriname",
                "iata": "ABN",
                "icao": "SMBN",
                "x": -54.050098419189,
                "y": 5.5127201080322,
                "elevation": 19
            }, {
                "id": "c8a17200-b9a3-45f0-a6b3-35f71e5b2b1e",
                "name": "Albuquerque International Sunport Airport",
                "city": "Albuquerque",
                "country": "United States",
                "iata": "ABQ",
                "icao": "KABQ",
                "x": -106.60900115967,
                "y": 35.040199279785,
                "elevation": 5355
            }, {
                "id": "3a21bc92-6703-4256-b5d1-7f21ab8d6633",
                "name": "Aberdeen Regional Airport",
                "city": "Aberdeen",
                "country": "United States",
                "iata": "ABR",
                "icao": "KABR",
                "x": -98.421798706055,
                "y": 45.449100494385,
                "elevation": 1302
            }, {
                "id": "2d864819-89f2-4a40-b0d6-8f1ca14caeb7",
                "name": "Abu Simbel Airport",
                "city": "Abu Simbel",
                "country": "Egypt",
                "iata": "ABS",
                "icao": "HEBL",
                "x": 31.611700058,
                "y": 22.3759994507,
                "elevation": 616
            }, {
                "id": "e5390c32-f082-415b-9ba6-12515d8e1fda",
                "name": "Al Baha Airport",
                "city": "El-baha",
                "country": "Saudi Arabia",
                "iata": "ABT",
                "icao": "OEBA",
                "x": 41.6343002319,
                "y": 20.2961006165,
                "elevation": 5486
            }],
            "meta": {
                "pagination": {
                    "total": 5653,
                    "count": 50,
                    "per_page": 50,
                    "current_page": 1,
                    "total_pages": 114,
                    "links": {"next": "https:\/\/missions.dev\/api\/utilities\/airports?page=2"}
                }
            }
        };

        return {
            body: body,
            status: 200,
            statusText: 'OK',
            headers: {/*headers*/},
            delay: Settings.delay, // millisecond
        }

    },

    ['GET *utilities/airports/:reference'] (pathMatch, query, request) {
        let body = {
            "data": {
                "id": "3a0742b1-54bc-44e0-9f87-2647afbe9637",
                "name": "Detroit Metropolitan Wayne County Airport",
                "city": "Detroit",
                "country": "United States",
                "iata": "DTW",
                "icao": "KDTW",
                "x": -83.353401184082,
                "y": 42.212398529053,
                "elevation": 645
            }
        };

        return {
            body: body,
            status: 200,
            statusText: 'OK',
            headers: {/*headers*/},
            delay: Settings.delay, // millisecond
        }

    },

    ['GET *utilities/countries'] (pathMatch, query, request) {
        let body = {"countries":[{"name":"United States","code":"us"},{"name":"Afghanistan","code":"af"},{"name":"Albania","code":"al"},{"name":"Algeria","code":"dz"},{"name":"American Samoa","code":"as"},{"name":"Andorra","code":"ad"},{"name":"Angola","code":"ao"},{"name":"Anguilla","code":"ai"},{"name":"Antarctica","code":"aq"},{"name":"Antigua and Barbuda","code":"ag"},{"name":"Argentina","code":"ar"},{"name":"Armenia","code":"am"},{"name":"Aruba","code":"aw"},{"name":"Australia","code":"au"},{"name":"Austria","code":"at"},{"name":"Azerbaijan","code":"az"},{"name":"Bahamas","code":"bs"},{"name":"Bahrain","code":"bh"},{"name":"Bangladesh","code":"bd"},{"name":"Barbados","code":"bb"},{"name":"Belarus","code":"by"},{"name":"Belgium","code":"be"},{"name":"Belize","code":"bz"},{"name":"Benin","code":"bj"},{"name":"Bermuda","code":"bm"},{"name":"Bhutan","code":"bt"},{"name":"Bolivia","code":"bo"},{"name":"Bosnia and Herzegovina","code":"ba"},{"name":"Botswana","code":"bw"},{"name":"Bouvet Island","code":"bv"},{"name":"Brazil","code":"br"},{"name":"British Indian Ocean Territory","code":"io"},{"name":"Brunei Darussalam","code":"bn"},{"name":"Bulgaria","code":"bg"},{"name":"Burkina Faso","code":"bf"},{"name":"Burundi","code":"bi"},{"name":"Cambodia","code":"kh"},{"name":"Cameroon","code":"cm"},{"name":"Canada","code":"ca"},{"name":"Cabo Verde","code":"cv"},{"name":"Cayman Islands","code":"ky"},{"name":"Central African Republic","code":"cf"},{"name":"Chad","code":"td"},{"name":"Chile","code":"cl"},{"name":"China","code":"cn"},{"name":"Christmas Island","code":"cx"},{"name":"Cocos (Keeling) Islands","code":"cc"},{"name":"Colombia","code":"co"},{"name":"Comoros","code":"km"},{"name":"Congo","code":"cg"},{"name":"Congo, the Democratic Republic of the","code":"cd"},{"name":"Cook Islands","code":"ck"},{"name":"Costa Rica","code":"cr"},{"name":"Cote d'Ivoire","code":"ci"},{"name":"Croatia (Hrvatska)","code":"hr"},{"name":"Cuba","code":"cu"},{"name":"Cura\u00e7ao","code":"cw"},{"name":"Cyprus","code":"cy"},{"name":"Czech Republic","code":"cz"},{"name":"Denmark","code":"dk"},{"name":"Djibouti","code":"dj"},{"name":"Dominica","code":"dm"},{"name":"Dominican Republic","code":"do"},{"name":"Dutch Caribbean","code":"bq"},{"name":"East Timor","code":"tl"},{"name":"Ecuador","code":"ec"},{"name":"Egypt","code":"eg"},{"name":"El Salvador","code":"sv"},{"name":"Equatorial Guinea","code":"gq"},{"name":"Eritrea","code":"er"},{"name":"Estonia","code":"ee"},{"name":"Ethiopia","code":"et"},{"name":"Falkland Islands (Malvinas)","code":"fk"},{"name":"Faroe Islands","code":"fo"},{"name":"Fiji","code":"fj"},{"name":"Finland","code":"fi"},{"name":"France","code":"fr"},{"name":"French Guiana","code":"gf"},{"name":"French Polynesia","code":"pf"},{"name":"French Southern Territories","code":"tf"},{"name":"Gabon","code":"ga"},{"name":"Gambia","code":"gm"},{"name":"Georgia","code":"ge"},{"name":"Germany","code":"de"},{"name":"Ghana","code":"gh"},{"name":"Gibraltar","code":"gi"},{"name":"Greece","code":"gr"},{"name":"Greenland","code":"gl"},{"name":"Grenada","code":"gd"},{"name":"Guadeloupe","code":"gp"},{"name":"Guam","code":"gu"},{"name":"Guatemala","code":"gt"},{"name":"Guinea","code":"gn"},{"name":"Guinea-Bissau","code":"gw"},{"name":"Guyana","code":"gy"},{"name":"Haiti","code":"ht"},{"name":"Heard and Mc Donald Islands","code":"hm"},{"name":"Holy See (Vatican City State)","code":"va"},{"name":"Honduras","code":"hn"},{"name":"Hong Kong","code":"hk"},{"name":"Hungary","code":"hu"},{"name":"Iceland","code":"is"},{"name":"India","code":"in"},{"name":"Indonesia","code":"id"},{"name":"Iran (Islamic Republic of)","code":"ir"},{"name":"Iraq","code":"iq"},{"name":"Ireland","code":"ie"},{"name":"Israel","code":"il"},{"name":"Italy","code":"it"},{"name":"Jamaica","code":"jm"},{"name":"Japan","code":"jp"},{"name":"Jordan","code":"jo"},{"name":"Kazakhstan","code":"kz"},{"name":"Kenya","code":"ke"},{"name":"Kiribati","code":"ki"},{"name":"Korea, Democratic People's Republic of","code":"kp"},{"name":"Korea, Republic of","code":"kr"},{"name":"Kuwait","code":"kw"},{"name":"Kyrgyzstan","code":"kg"},{"name":"Lao, People's Democratic Republic","code":"la"},{"name":"Latvia","code":"lv"},{"name":"Lebanon","code":"lb"},{"name":"Lesotho","code":"ls"},{"name":"Liberia","code":"lr"},{"name":"Libyan Arab Jamahiriya","code":"ly"},{"name":"Liechtenstein","code":"li"},{"name":"Lithuania","code":"lt"},{"name":"Luxembourg","code":"lu"},{"name":"Macao","code":"mo"},{"name":"Macedonia, The Former Yugoslav Republic of","code":"mk"},{"name":"Madagascar","code":"mg"},{"name":"Malawi","code":"mw"},{"name":"Malaysia","code":"my"},{"name":"Maldives","code":"mv"},{"name":"Mali","code":"ml"},{"name":"Malta","code":"mt"},{"name":"Marshall Islands","code":"mh"},{"name":"Martinique","code":"mq"},{"name":"Mauritania","code":"mr"},{"name":"Mauritius","code":"mu"},{"name":"Mayotte","code":"yt"},{"name":"Mexico","code":"mx"},{"name":"Micronesia, Federated States of","code":"fm"},{"name":"Moldova, Republic of","code":"md"},{"name":"Monaco","code":"mc"},{"name":"Mongolia","code":"mn"},{"name":"Montserrat","code":"ms"},{"name":"Morocco","code":"ma"},{"name":"Mozambique","code":"mz"},{"name":"Myanmar","code":"mm"},{"name":"Namibia","code":"na"},{"name":"Nauru","code":"nr"},{"name":"Nepal","code":"np"},{"name":"Netherlands","code":"nl"},{"name":"Netherlands Antilles","code":"an"},{"name":"New Caledonia","code":"nc"},{"name":"New Zealand","code":"nz"},{"name":"Nicaragua","code":"ni"},{"name":"Niger","code":"ne"},{"name":"Nigeria","code":"ng"},{"name":"Niue","code":"nu"},{"name":"Norfolk Island","code":"nf"},{"name":"Northern Mariana Islands","code":"mp"},{"name":"Norway","code":"no"},{"name":"Oman","code":"om"},{"name":"Pakistan","code":"pk"},{"name":"Palau","code":"pw"},{"name":"Panama","code":"pa"},{"name":"Papua New Guinea","code":"pg"},{"name":"Paraguay","code":"py"},{"name":"Peru","code":"pe"},{"name":"Philippines","code":"ph"},{"name":"Pitcairn","code":"pn"},{"name":"Poland","code":"pl"},{"name":"Portugal","code":"pt"},{"name":"Puerto Rico","code":"pr"},{"name":"Qatar","code":"qa"},{"name":"Reunion","code":"re"},{"name":"Romania","code":"ro"},{"name":"Russian Federation","code":"ru"},{"name":"Rwanda","code":"rw"},{"name":"Saint Kitts and Nevis","code":"kn"},{"name":"Saint Lucia","code":"lc"},{"name":"Saint Vincent and the Grenadines","code":"vc"},{"name":"Samoa","code":"ws"},{"name":"San Marino","code":"sm"},{"name":"Sao Tome and Principe","code":"st"},{"name":"Saudi Arabia","code":"sa"},{"name":"Senegal","code":"sn"},{"name":"Seychelles","code":"sc"},{"name":"Sierra Leone","code":"sl"},{"name":"Singapore","code":"sg"},{"name":"Slovakia (Slovak Republic)","code":"sk"},{"name":"Slovenia","code":"si"},{"name":"Solomon Islands","code":"sb"},{"name":"Somalia","code":"so"},{"name":"South Africa","code":"za"},{"name":"South Georgia and the South Sandwich Islands","code":"gs"},{"name":"Spain","code":"es"},{"name":"Sri Lanka","code":"lk"},{"name":"St. Helena","code":"sh"},{"name":"St. Pierre and Miquelon","code":"pm"},{"name":"Sudan","code":"sd"},{"name":"Suriname","code":"sr"},{"name":"Svalbard and Jan Mayen Islands","code":"sj"},{"name":"Swaziland","code":"sz"},{"name":"Sweden","code":"se"},{"name":"Switzerland","code":"ch"},{"name":"Syrian Arab Republic","code":"sy"},{"name":"Taiwan, Province of China","code":"tw"},{"name":"Tajikistan","code":"tj"},{"name":"Tanzania, United Republic of","code":"tz"},{"name":"Thailand","code":"th"},{"name":"Togo","code":"tg"},{"name":"Tokelau","code":"tk"},{"name":"Tonga","code":"to"},{"name":"Trinidad and Tobago","code":"tt"},{"name":"Tunisia","code":"tn"},{"name":"Turkey","code":"tr"},{"name":"Turkmenistan","code":"tm"},{"name":"Turks and Caicos Islands","code":"tc"},{"name":"Tuvalu","code":"tv"},{"name":"Uganda","code":"ug"},{"name":"Ukraine","code":"ua"},{"name":"United Arab Emirates","code":"ae"},{"name":"United Kingdom","code":"gb"},{"name":"United States Minor Outlying Islands","code":"um"},{"name":"Uruguay","code":"uy"},{"name":"Uzbekistan","code":"uz"},{"name":"Vanuatu","code":"vu"},{"name":"Venezuela","code":"ve"},{"name":"Vietnam","code":"vn"},{"name":"Virgin Islands (British)","code":"vg"},{"name":"Virgin Islands (U.S.)","code":"vi"},{"name":"Wallis and Futuna Islands","code":"wf"},{"name":"Western Sahara","code":"eh"},{"name":"Yemen","code":"ye"},{"name":"Serbia","code":"yu"},{"name":"Zambia","code":"zm"},{"name":"Zimbabwe","code":"zw"}]};
        return {
            body: body,
            status: 200,
            statusText: 'OK',
            headers: {/*headers*/},
            delay: Settings.delay, // millisecond
        }

    },

    ['GET *utilities/airlines'] (pathMatch, query, request) {
        let body = {"data":[{"id":"004f1cd7-dfb8-4871-9f5b-61a67a1836ef","name":"Virgin Nigeria Airways","alias":"","iata":"VK","icao":"VGN","call_sign":"VIRGIN NIGERIA","country":"Nigeria","active":"Y"},{"id":"006a540f-0926-41e7-8544-7c849277b5bf","name":"City Connexion Airlines","alias":"","iata":"G3","icao":"CIX","call_sign":"CONNEXION","country":"Burundi","active":"Y"},{"id":"00b25023-5285-4722-b913-3d4f6d647188","name":"Jet2.com","alias":"","iata":"LS","icao":"EXS","call_sign":"CHANNEX","country":"United Kingdom","active":"Y"},{"id":"00c53c06-2484-4209-9044-8e508fda2711","name":"Air Ivoire","alias":"","iata":"VU","icao":"VUN","call_sign":"AIRIVOIRE","country":"Ivory Coast","active":"Y"},{"id":"00d33740-2e2d-41d8-9658-993c0265c2d8","name":"ALAK","alias":"","iata":"J4","icao":null,"call_sign":"","country":"Russia","active":"Y"},{"id":"0112b2ab-c78d-44d0-84dd-c7613966bef2","name":"Spring Airlines","alias":"","iata":"9S","icao":"CQH","call_sign":"AIR SPRING","country":"China","active":"Y"},{"id":"01bd58dd-5251-4e8b-9062-caee85b856d1","name":"ScotAirways","alias":"","iata":"","icao":"SAY","call_sign":"SUCKLING","country":"United Kingdom","active":"Y"},{"id":"01c71d29-6bb7-42ac-b0eb-a6e9795d0463","name":"YES Airways","alias":"","iata":"","icao":"YEP","call_sign":"","country":"Poland","active":"Y"},{"id":"01caf7bc-850b-4e09-9e86-dcb628e90375","name":"TransHolding System","alias":"","iata":"YO","icao":"TYS","call_sign":"","country":"Brazil","active":"Y"},{"id":"0230cab0-2bd0-47a5-bbbb-c6bae2f4bc74","name":"Alliance Airlines","alias":"","iata":"QQ","icao":"UTY","call_sign":"UNITY","country":"Australia","active":"Y"},{"id":"02597a3a-5a9b-4c2e-8db7-b51ffec98874","name":"Eastok Avia","alias":"","iata":"","icao":"EAA","call_sign":"","country":"Kyrgyzstan","active":"Y"},{"id":"02882b23-4651-45a1-95c7-7f70f3770bc1","name":"Jc royal.britannica","alias":"","iata":"","icao":"JRB","call_sign":"","country":"United Kingdom","active":"Y"},{"id":"02c14f3f-9a9f-4f86-a42d-6e9d0991fe58","name":"Wizz Air Ukraine","alias":"","iata":"WU","icao":"WAU","call_sign":"WIZZAIR UKRAINE","country":"Ukraine","active":"Y"},{"id":"02d94f31-b0b3-47e8-ad9e-79cfb8767db4","name":"Go2Sky","alias":"","iata":"","icao":"RLX","call_sign":"RELAX","country":"Slovakia","active":"Y"},{"id":"031e55b6-d0fa-4898-b7ac-bdb7bfd127c8","name":"Dominicana de Aviaci","alias":"","iata":"DO","icao":"DOA","call_sign":"DOMINICANA","country":"Dominican Republic","active":"Y"},{"id":"04864b09-1ead-4653-9de4-7c81401f3734","name":"VASP","alias":"","iata":"VP","icao":"VSP","call_sign":"VASP","country":"Brazil","active":"Y"},{"id":"04d2b4c2-abc6-473e-94c6-647ba8b23a8b","name":"WestJet Encore","alias":"Encore","iata":"WR","icao":"WEN","call_sign":"Encore","country":"Canada","active":"Y"},{"id":"04e4bf98-ba41-4c2f-9a41-ed9a75316104","name":"Ocean Air","alias":"","iata":"","icao":"BCN","call_sign":"BLUE OCEAN","country":"Mauritania","active":"Y"},{"id":"050e8b65-b24b-4c99-a91a-39c367f91ffe","name":"Islena De Inversiones","alias":"","iata":"WC","icao":"ISV","call_sign":"","country":"Honduras","active":"Y"},{"id":"052e6f14-0552-4ad0-8db4-6dcf7ddddd54","name":"Transilvania","alias":"","iata":"","icao":"TNS","call_sign":"","country":"Romania","active":"Y"},{"id":"057396f7-032d-4313-844f-96bf2210b28f","name":"American Eagle Airlines","alias":"","iata":"MQ","icao":"EGF","call_sign":"EAGLE FLIGHT","country":"United States","active":"Y"},{"id":"0579ce92-50fe-42e7-bc70-51751b0471e6","name":"Sky Regional Airlines","alias":"","iata":"","icao":"SKV","call_sign":"Maple","country":"Canada","active":"Y"},{"id":"05a714ca-dcb9-4fe5-aa8b-78e65e05478a","name":"TransRussiaAirlines","alias":"TransRus","iata":"1E","icao":"RGG","call_sign":"","country":"Russia","active":"Y"},{"id":"05aa66ac-f880-45e9-8d82-5e876a5dd82b","name":"Austrian Airlines","alias":"","iata":"OS","icao":"AUA","call_sign":"AUSTRIAN","country":"Austria","active":"Y"},{"id":"064d8027-e2e9-4986-921c-5482257aea3e","name":"Transair","alias":"","iata":"","icao":"TTZ","call_sign":"","country":"Canada","active":"Y"},{"id":"06b21881-1ed3-401f-ad5b-1c74f88ae5b7","name":"Bering Air","alias":"","iata":"8E","icao":"BRG","call_sign":"BERING AIR","country":"United States","active":"Y"},{"id":"06bf43d6-a8b3-492d-b430-192d641fa651","name":"Macair Airlines","alias":"","iata":"CC","icao":"MCK","call_sign":"","country":"Australia","active":"Y"},{"id":"070e17d9-44c8-487e-afe7-f5af8a33d009","name":"Carpatair","alias":"","iata":"V3","icao":"KRP","call_sign":"CARPATAIR","country":"Romania","active":"Y"},{"id":"07331d71-3ff6-45c1-94fc-fb87e76150b9","name":"Northwestern Air","alias":"","iata":"J3","icao":"PLR","call_sign":"POLARIS","country":"Canada","active":"Y"},{"id":"07346213-1476-43e7-8e30-9a5f4e75c660","name":"Dubrovnik Air","alias":"","iata":"","icao":"DBK","call_sign":"SEAGULL","country":"Croatia","active":"Y"},{"id":"07442bd3-fd44-4923-bea9-e82e6176cba0","name":"All Nippon Airways","alias":"ANA All Nippon Airways","iata":"NH","icao":"ANA","call_sign":"ALL NIPPON","country":"Japan","active":"Y"},{"id":"07c5c2c7-5898-4810-be69-2cbe4b4381a0","name":"United States Air Force","alias":"","iata":"","icao":"AIO","call_sign":"AIR CHIEF","country":"United States","active":"Y"},{"id":"07dff140-9c4c-42a1-9035-7ab615c331e6","name":"China Northwest Airlines (WH)","alias":"","iata":"WH","icao":null,"call_sign":"","country":"China","active":"Y"},{"id":"07eb87de-1db3-49f6-92f5-894ae4c0ffd7","name":"Abu Dhabi Amiri Flight","alias":"","iata":"MO","icao":"AUH","call_sign":"SULTAN","country":"United Arab Emirates","active":"Y"},{"id":"080ea9f2-57e4-4453-8b71-eeee4577eab0","name":"China Southern Airlines","alias":"","iata":"CZ","icao":"CSN","call_sign":"CHINA SOUTHERN","country":"China","active":"Y"},{"id":"0836341d-caf1-4575-9538-db802c907847","name":"Primera Air","alias":"","iata":"PF","icao":null,"call_sign":"PRIMERA","country":"Iceland","active":"Y"},{"id":"084a8ea1-ce51-4f9d-b7ba-8c578caa229e","name":"Airlink (SAA)","alias":"","iata":"4Z","icao":null,"call_sign":"","country":"South Africa","active":"Y"},{"id":"0884cebf-782c-4855-8538-96ddca5eca01","name":"Spicejet","alias":"","iata":"SG","icao":"SEJ","call_sign":"SPICEJET","country":"India","active":"Y"},{"id":"088b0651-5a3c-4484-932c-7d2ca4fc7c95","name":"Skyjet Airlines","alias":"","iata":"UQ","icao":"SJU","call_sign":"SKYJET","country":"Uganda","active":"Y"},{"id":"088bff98-b7d1-4de1-8735-d2a97c40a7a0","name":"Nauru Air Corporation","alias":"","iata":"ON","icao":"RON","call_sign":"AIR NAURU","country":"Nauru","active":"Y"},{"id":"0894f80f-5cb1-4b75-a6d9-37be5e2e476a","name":"Polet Airlines (Priv)","alias":"","iata":"YQ","icao":null,"call_sign":"","country":"Russia","active":"Y"},{"id":"08af9fe4-68ab-4e7e-86d9-0cbe8487bf19","name":"STP Airways","alias":"","iata":"8F","icao":"STP","call_sign":"SAOTOME AIRWAYS","country":"Sao Tome and Principe","active":"Y"},{"id":"09048e91-2b86-4cda-b3f7-5a154db0557b","name":"UTair Aviation","alias":"","iata":"UT","icao":"UTA","call_sign":"UTAIR","country":"Russia","active":"Y"},{"id":"091f0789-4692-4ef7-9e0e-4181f0991b48","name":"Frontier Airlines","alias":"","iata":"F9","icao":"FFT","call_sign":"FRONTIER FLIGHT","country":"United States","active":"Y"},{"id":"0955ec55-1185-4e2a-9442-df5c16d804e4","name":"China United","alias":"","iata":"KN","icao":null,"call_sign":"","country":"China","active":"Y"},{"id":"09951dbb-444a-45e0-8fa7-b413ee5cbfa3","name":"WebJet Linhas A","alias":"","iata":"WJ","icao":"WEB","call_sign":"WEB-BRASIL","country":"Brazil","active":"Y"},{"id":"09a734a6-0e4e-4bc9-9f0f-025a9af30245","name":"Air Explore","alias":"","iata":"","icao":"AXE","call_sign":"","country":"Slovakia","active":"Y"},{"id":"0a2f01ba-bd60-48f6-a2dd-4c0731f27e48","name":"Mal\u00c3\u00a9v","alias":"","iata":"MA","icao":"MAH","call_sign":"MALEV","country":"Hungary","active":"Y"},{"id":"0a38f88d-418e-438f-8f8a-2d9058bbbffe","name":"Caucasus Airlines","alias":"","iata":"NS","icao":null,"call_sign":"","country":"Georgia","active":"Y"},{"id":"0a458305-ae3e-4d17-a18c-cb098ecfee01","name":"Eurowings","alias":"","iata":"EW","icao":"EWG","call_sign":"EUROWINGS","country":"Germany","active":"Y"}],"meta":{"pagination":{"total":1251,"count":50,"per_page":50,"current_page":1,"total_pages":26,"links":{"next":"https:\/\/missions.dev\/api\/utilities\/airlines?page=2"}}}};
        return {
            body: body,
            status: 200,
            statusText: 'OK',
            headers: {/*headers*/},
            delay: Settings.delay, // millisecond
        }

    },

    ['GET *utilities/timezones'] (pathMatch, query, request) {
        let body = {"timezones":["Africa\/Abidjan","Africa\/Accra","Africa\/Addis_Ababa","Africa\/Algiers","Africa\/Asmara","Africa\/Bamako","Africa\/Bangui","Africa\/Banjul","Africa\/Bissau","Africa\/Blantyre","Africa\/Brazzaville","Africa\/Bujumbura","Africa\/Cairo","Africa\/Casablanca","Africa\/Ceuta","Africa\/Conakry","Africa\/Dakar","Africa\/Dar_es_Salaam","Africa\/Djibouti","Africa\/Douala","Africa\/El_Aaiun","Africa\/Freetown","Africa\/Gaborone","Africa\/Harare","Africa\/Johannesburg","Africa\/Juba","Africa\/Kampala","Africa\/Khartoum","Africa\/Kigali","Africa\/Kinshasa","Africa\/Lagos","Africa\/Libreville","Africa\/Lome","Africa\/Luanda","Africa\/Lubumbashi","Africa\/Lusaka","Africa\/Malabo","Africa\/Maputo","Africa\/Maseru","Africa\/Mbabane","Africa\/Mogadishu","Africa\/Monrovia","Africa\/Nairobi","Africa\/Ndjamena","Africa\/Niamey","Africa\/Nouakchott","Africa\/Ouagadougou","Africa\/Porto-Novo","Africa\/Sao_Tome","Africa\/Tripoli","Africa\/Tunis","Africa\/Windhoek","America\/Adak","America\/Anchorage","America\/Anguilla","America\/Antigua","America\/Araguaina","America\/Argentina\/Buenos_Aires","America\/Argentina\/Catamarca","America\/Argentina\/Cordoba","America\/Argentina\/Jujuy","America\/Argentina\/La_Rioja","America\/Argentina\/Mendoza","America\/Argentina\/Rio_Gallegos","America\/Argentina\/Salta","America\/Argentina\/San_Juan","America\/Argentina\/San_Luis","America\/Argentina\/Tucuman","America\/Argentina\/Ushuaia","America\/Aruba","America\/Asuncion","America\/Atikokan","America\/Bahia","America\/Bahia_Banderas","America\/Barbados","America\/Belem","America\/Belize","America\/Blanc-Sablon","America\/Boa_Vista","America\/Bogota","America\/Boise","America\/Cambridge_Bay","America\/Campo_Grande","America\/Cancun","America\/Caracas","America\/Cayenne","America\/Cayman","America\/Chicago","America\/Chihuahua","America\/Costa_Rica","America\/Creston","America\/Cuiaba","America\/Curacao","America\/Danmarkshavn","America\/Dawson","America\/Dawson_Creek","America\/Denver","America\/Detroit","America\/Dominica","America\/Edmonton","America\/Eirunepe","America\/El_Salvador","America\/Fort_Nelson","America\/Fortaleza","America\/Glace_Bay","America\/Godthab","America\/Goose_Bay","America\/Grand_Turk","America\/Grenada","America\/Guadeloupe","America\/Guatemala","America\/Guayaquil","America\/Guyana","America\/Halifax","America\/Havana","America\/Hermosillo","America\/Indiana\/Indianapolis","America\/Indiana\/Knox","America\/Indiana\/Marengo","America\/Indiana\/Petersburg","America\/Indiana\/Tell_City","America\/Indiana\/Vevay","America\/Indiana\/Vincennes","America\/Indiana\/Winamac","America\/Inuvik","America\/Iqaluit","America\/Jamaica","America\/Juneau","America\/Kentucky\/Louisville","America\/Kentucky\/Monticello","America\/Kralendijk","America\/La_Paz","America\/Lima","America\/Los_Angeles","America\/Lower_Princes","America\/Maceio","America\/Managua","America\/Manaus","America\/Marigot","America\/Martinique","America\/Matamoros","America\/Mazatlan","America\/Menominee","America\/Merida","America\/Metlakatla","America\/Mexico_City","America\/Miquelon","America\/Moncton","America\/Monterrey","America\/Montevideo","America\/Montserrat","America\/Nassau","America\/New_York","America\/Nipigon","America\/Nome","America\/Noronha","America\/North_Dakota\/Beulah","America\/North_Dakota\/Center","America\/North_Dakota\/New_Salem","America\/Ojinaga","America\/Panama","America\/Pangnirtung","America\/Paramaribo","America\/Phoenix","America\/Port-au-Prince","America\/Port_of_Spain","America\/Porto_Velho","America\/Puerto_Rico","America\/Rainy_River","America\/Rankin_Inlet","America\/Recife","America\/Regina","America\/Resolute","America\/Rio_Branco","America\/Santarem","America\/Santiago","America\/Santo_Domingo","America\/Sao_Paulo","America\/Scoresbysund","America\/Sitka","America\/St_Barthelemy","America\/St_Johns","America\/St_Kitts","America\/St_Lucia","America\/St_Thomas","America\/St_Vincent","America\/Swift_Current","America\/Tegucigalpa","America\/Thule","America\/Thunder_Bay","America\/Tijuana","America\/Toronto","America\/Tortola","America\/Vancouver","America\/Whitehorse","America\/Winnipeg","America\/Yakutat","America\/Yellowknife","Antarctica\/Casey","Antarctica\/Davis","Antarctica\/DumontDUrville","Antarctica\/Macquarie","Antarctica\/Mawson","Antarctica\/McMurdo","Antarctica\/Palmer","Antarctica\/Rothera","Antarctica\/Syowa","Antarctica\/Troll","Antarctica\/Vostok","Arctic\/Longyearbyen","Asia\/Aden","Asia\/Almaty","Asia\/Amman","Asia\/Anadyr","Asia\/Aqtau","Asia\/Aqtobe","Asia\/Ashgabat","Asia\/Baghdad","Asia\/Bahrain","Asia\/Baku","Asia\/Bangkok","Asia\/Barnaul","Asia\/Beirut","Asia\/Bishkek","Asia\/Brunei","Asia\/Chita","Asia\/Choibalsan","Asia\/Colombo","Asia\/Damascus","Asia\/Dhaka","Asia\/Dili","Asia\/Dubai","Asia\/Dushanbe","Asia\/Gaza","Asia\/Hebron","Asia\/Ho_Chi_Minh","Asia\/Hong_Kong","Asia\/Hovd","Asia\/Irkutsk","Asia\/Jakarta","Asia\/Jayapura","Asia\/Jerusalem","Asia\/Kabul","Asia\/Kamchatka","Asia\/Karachi","Asia\/Kathmandu","Asia\/Khandyga","Asia\/Kolkata","Asia\/Krasnoyarsk","Asia\/Kuala_Lumpur","Asia\/Kuching","Asia\/Kuwait","Asia\/Macau","Asia\/Magadan","Asia\/Makassar","Asia\/Manila","Asia\/Muscat","Asia\/Nicosia","Asia\/Novokuznetsk","Asia\/Novosibirsk","Asia\/Omsk","Asia\/Oral","Asia\/Phnom_Penh","Asia\/Pontianak","Asia\/Pyongyang","Asia\/Qatar","Asia\/Qyzylorda","Asia\/Rangoon","Asia\/Riyadh","Asia\/Sakhalin","Asia\/Samarkand","Asia\/Seoul","Asia\/Shanghai","Asia\/Singapore","Asia\/Srednekolymsk","Asia\/Taipei","Asia\/Tashkent","Asia\/Tbilisi","Asia\/Tehran","Asia\/Thimphu","Asia\/Tokyo","Asia\/Ulaanbaatar","Asia\/Urumqi","Asia\/Ust-Nera","Asia\/Vientiane","Asia\/Vladivostok","Asia\/Yakutsk","Asia\/Yekaterinburg","Asia\/Yerevan","Atlantic\/Azores","Atlantic\/Bermuda","Atlantic\/Canary","Atlantic\/Cape_Verde","Atlantic\/Faroe","Atlantic\/Madeira","Atlantic\/Reykjavik","Atlantic\/South_Georgia","Atlantic\/St_Helena","Atlantic\/Stanley","Australia\/Adelaide","Australia\/Brisbane","Australia\/Broken_Hill","Australia\/Currie","Australia\/Darwin","Australia\/Eucla","Australia\/Hobart","Australia\/Lindeman","Australia\/Lord_Howe","Australia\/Melbourne","Australia\/Perth","Australia\/Sydney","Europe\/Amsterdam","Europe\/Andorra","Europe\/Astrakhan","Europe\/Athens","Europe\/Belgrade","Europe\/Berlin","Europe\/Bratislava","Europe\/Brussels","Europe\/Bucharest","Europe\/Budapest","Europe\/Busingen","Europe\/Chisinau","Europe\/Copenhagen","Europe\/Dublin","Europe\/Gibraltar","Europe\/Guernsey","Europe\/Helsinki","Europe\/Isle_of_Man","Europe\/Istanbul","Europe\/Jersey","Europe\/Kaliningrad","Europe\/Kiev","Europe\/Lisbon","Europe\/Ljubljana","Europe\/London","Europe\/Luxembourg","Europe\/Madrid","Europe\/Malta","Europe\/Mariehamn","Europe\/Minsk","Europe\/Monaco","Europe\/Moscow","Europe\/Oslo","Europe\/Paris","Europe\/Podgorica","Europe\/Prague","Europe\/Riga","Europe\/Rome","Europe\/Samara","Europe\/San_Marino","Europe\/Sarajevo","Europe\/Simferopol","Europe\/Skopje","Europe\/Sofia","Europe\/Stockholm","Europe\/Tallinn","Europe\/Tirane","Europe\/Ulyanovsk","Europe\/Uzhgorod","Europe\/Vaduz","Europe\/Vatican","Europe\/Vienna","Europe\/Vilnius","Europe\/Volgograd","Europe\/Warsaw","Europe\/Zagreb","Europe\/Zaporozhye","Europe\/Zurich","Indian\/Antananarivo","Indian\/Chagos","Indian\/Christmas","Indian\/Cocos","Indian\/Comoro","Indian\/Kerguelen","Indian\/Mahe","Indian\/Maldives","Indian\/Mauritius","Indian\/Mayotte","Indian\/Reunion","Pacific\/Apia","Pacific\/Auckland","Pacific\/Bougainville","Pacific\/Chatham","Pacific\/Chuuk","Pacific\/Easter","Pacific\/Efate","Pacific\/Enderbury","Pacific\/Fakaofo","Pacific\/Fiji","Pacific\/Funafuti","Pacific\/Galapagos","Pacific\/Gambier","Pacific\/Guadalcanal","Pacific\/Guam","Pacific\/Honolulu","Pacific\/Johnston","Pacific\/Kiritimati","Pacific\/Kosrae","Pacific\/Kwajalein","Pacific\/Majuro","Pacific\/Marquesas","Pacific\/Midway","Pacific\/Nauru","Pacific\/Niue","Pacific\/Norfolk","Pacific\/Noumea","Pacific\/Pago_Pago","Pacific\/Palau","Pacific\/Pitcairn","Pacific\/Pohnpei","Pacific\/Port_Moresby","Pacific\/Rarotonga","Pacific\/Saipan","Pacific\/Tahiti","Pacific\/Tarawa","Pacific\/Tongatapu","Pacific\/Wake","Pacific\/Wallis","UTC"]};
        return {
            body: body,
            status: 200,
            statusText: 'OK',
            headers: {/*headers*/},
            delay: Settings.delay, // millisecond
        }

    },

    ['GET *utilities/past-trips'] (pathMatch, query, request) {
        let body = ["2004 Puerto Plata, Dominican Rep.","2005 Iquitos, Peru","2005 Leon, Nicaragua","2005 Cusco, Peru","2006 Belo Horizonte, Brazil","2006 Azua, Dominican Rep.","2006 Cap Haitien, Haiti","2007 Escuintla, Guatemala","2007 El Progreso, Honduras","2007 Cap-Hatien, Haiti","2008 Shillong, India","2008 Barahona, Dominican Rep.","2008 Puerto Cortes, Honduras","2008 Santa Cruz, Bolivia","2009 Managua, Nicaragua","2009 Petionville, Haiti","2010 Kurnool, India","2010 San Cristobal, Dominican Rep.","2010 Lima, Peru","2010 Warangal, India","2011 Meteti, Panama","2011 Andra Pradesh, India","2011 Lima, Peru","2011 Amazon River, Peru","2011 Croix-de-Bouquet, Haiti","2011 Bhimavaram, India","2012 Buriram, Thailand","2012 La Ceiba, Honduras","2012 Patna, India","2012 Quito, Ecuador","2012 Bangkok, Thailand","2012 Lima, Peru","2012 Hyderabad, India","2013 Patna, India","2013 1Nation1Day Honduras","2013 Hyderabad, India","2014 Yoro, Honduras","2014 Roatan, Honduras","2014 Kumasi, Ghana","2014 Lima, Peru","2014 Kathmandu, Nepal","2015 India","2015 1Nation1Day Dominican Republic","2015 Christmas in India","2016 India","2016 Ecuador","2016 Nicaragua","2016 Honduras 1N1D Follow up","2016 Nepal","2016 Christmas in India"];
        return {
            body: body,
            status: 200,
            statusText: 'OK',
            headers: {/*headers*/},
            delay: Settings.delay, // millisecond
        }

    },

}