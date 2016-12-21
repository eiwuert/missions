@extends('dashboard.records.index')

@section('header')
<div class="white-header-bg">
    <div class="container">
        <div class="row">
            <div class="col-sm-8">
                <h3>My Passports</h3>
            </div>
            <div class="col-sm-4 text-right">
                <hr class="divider inv sm">
                <a href="{{ url('dashboard/records/passports/create') }}" class="btn btn-primary"><i class="fa fa-plus icon-left"></i> Add Passport</a>
            </div>
        </div>
    </div>
</div>
@stop

@section('tab')
    <passports-list user-id="{{ auth()->user()->id }}"></passports-list>
    <hr class="divider inv lg">
@stop