@extends('dashboard.records.index')

@section('header')
<div class="white-header-bg">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8">
                <h3 class="hidden-xs">My Passports</h3>
                <h3 class="text-center visible-xs">My Passports</h3>
            </div>
            <div class="col-sm-4 text-right hidden-xs tour-step-add">
                <hr class="divider inv sm">
                <a href="{{ url('dashboard/records/passports/create') }}" class="btn btn-primary"><i class="fa fa-plus icon-left"></i> Add Passport</a>
            </div>
            <div class="col-xs-12 text-center visible-xs tour-step-add">
                <a href="{{ url('dashboard/records/passports/create') }}" class="btn btn-primary"><i class="fa fa-plus icon-left"></i> Add Passport</a>
                <hr class="divider inv sm">
            </div>
        </div>
    </div>
</div>
@stop

@section('tab')
    <passports-list user-id="{{ auth()->user()->id }}"></passports-list>
    <hr class="divider inv lg">
@stop