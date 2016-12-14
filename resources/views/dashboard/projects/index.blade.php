@extends('dashboard.layouts.default')

@section('content')
    <div class="white-header-bg">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h3>My Projects</h3>
                </div>
            </div>
        </div>
    </div>
    <hr class="divider inv lg">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <ul class="nav nav-tabs">
                    <li role="presentation" class="active">
                        <a href="#active" data-toggle="pill"><i class="fa fa-bolt"></i> Active</a>
                    </li>
                    <li role="presentation">
                        <a href="#archive" data-toggle="pill"><i class="fa fa-archive"></i> Archived</a>
                    </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active" id="active">
                        <user-projects-list user-id="{{ Auth::user()->id }}" type="active"></user-projects-list>
                    </div>

                    <div role="tabpanel" class="tab-pane" id="archive">
                        <user-projects-list user-id="{{ Auth::user()->id }}" type="archive"></user-projects-list>
                    </div>

                </div>
            </div>
        </div>
        <hr class="divider inv lg">
    </div>

@endsection