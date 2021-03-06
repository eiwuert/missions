@extends('dashboard.layouts.default')

@section('content')
<div class="white-header-bg">
    <div class="container" v-tour-guide="">
        <div class="row">
            <div class="col-sm-8">
                <h3 class="hidden-xs">
                    <img class="av-left img-sm img-circle" style="width:100px; height:100px" src="{{ image($reservation->trip->campaign->getAvatar()->source . "?w=200") }}" alt="{{ $reservation->trip->campaign->name }}">{{ $reservation->trip->campaign->name }}
                    <small>&middot; {{ country($reservation->trip->campaign->country_code) }}</small>
                </h3>
                <div class="visible-xs text-center">
                    <hr class="divider inv">
                    <img class="img-sm img-circle" style="width:100px; height:100px" src="{{ image($reservation->trip->campaign->getAvatar()->source . "?w=200") }}" alt="{{ $reservation->trip->campaign->name }}">
                    <h4 style="margin-bottom:0;">{{ $reservation->trip->campaign->name }}</h4>
                    <label>{{ country($reservation->trip->campaign->country_code) }}</label>
                </div>
            </div>
            <div class="col-sm-4 text-right hidden-xs">
                <hr class="divider inv">
                <hr class="divider inv sm">
                <a href="{{ url('dashboard/reservations') }}" class="btn btn-default"><span class="fa fa-chevron-left icon-left"></span> Back</a>
                <hr class="divider inv">
            </div>
            <div class="col-xs-12 text-center visible-xs">
                <hr class="divider inv sm">
                <a href="{{ url('dashboard/reservations') }}" class="btn btn-default"><span class="fa fa-chevron-left icon-left"></span> Back</a>
                <hr class="divider inv">
            </div>
        </div>
    </div>
</div>
    <hr class="divider inv lg">
    <div class="container">
        <div class="row">
            <div class="col-sm-4 tour-step-rep">
                @include('dashboard.reservations.layouts.menu', [
                'links' => config('navigation.dashboard.reservation'),
                'rep' => $rep
                ])
            </div>
            <div class="col-sm-8">
                @yield('tab')
            </div>
        </div>
    </div>
    <hr class="divider inv xlg">
@stop