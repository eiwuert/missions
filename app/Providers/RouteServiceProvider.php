<?php

namespace App\Providers;

use Illuminate\Routing\Router;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $webNamespace = 'App\Http\Controllers\Web';

    protected $adminNamespace = 'App\Http\Controllers\Admin';

    protected $apiNamespace = 'App\Http\Controllers\Api';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @param  \Illuminate\Routing\Router  $router
     * @return void
     */
    public function boot(Router $router)
    {
        //

        parent::boot($router);
    }

    /**
     * Define the routes for the application.
     *
     * @param  \Illuminate\Routing\Router  $router
     * @return void
     */
    public function map(Router $router)
    {
        $this->mapWebRoutes($router);

        $this->mapAdminRoutes($router);

        $this->mapApiRoutes($router);
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @param  \Illuminate\Routing\Router  $router
     * @return void
     */
    protected function mapWebRoutes(Router $router)
    {
        $router->group([
            'namespace' => $this->webNamespace, 'middleware' => 'web',
        ], function ($router) {
            require app_path('Http/routes.php');
        });
    }

    /**
     * Define the "admin" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @param  \Illuminate\Routing\Router  $router
     * @return void
     */
    protected function mapAdminRoutes(Router $router)
    {
        $router->group([
            'prefix' => 'admin',
            'namespace' => $this->adminNamespace, 'middleware' => ['web','auth', 'can:view-admin'],
        ], function ($router) {
            require app_path('Http/admin.php');
        });
    }

    /**
     * Define the "api" routes for the application.
     *
     * @param  \Illuminate\Routing\Router  $router
     * @return void
     */
    protected function mapApiRoutes(Router $router)
    {
        $router->group([
            'prefix' => 'api',
            'namespace' => $this->apiNamespace, 'middleware' => 'api',
        ], function ($router) {
            require app_path('Http/api.php');
        });
    }
}
