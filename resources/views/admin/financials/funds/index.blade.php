@extends('admin.layouts.default')

@section('content')
    <div class="white-header-bg">
        <div class="container">
            <div class="row">
                <div class="col-sm-8">
                    <h3>Funds</h3>
                </div>
            </div>
        </div>
    </div>
    <hr class="divider inv lg">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                @include('admin.financials.partials._tabs')
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-body">
                <admin-funds-list></admin-funds-list>
            </div><!-- end panel-body -->
        </div><!-- end panel -->
    </div>
@stop