@extends('admin.layouts.default')

@section('styles')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-jcrop/2.0.0/css/Jcrop.min.css" type="text/css">
@endsection
@section('scripts')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-jcrop/2.0.0/js/Jcrop.min.js"></script>
@endsection

@section('content')
    <div class="white-header-bg">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h3>Reservation <small>&middot; Edit</small></h3>
                </div>
            </div>
        </div>
    </div>
    <hr class="divider inv lg">
    <div class="container">
        <div class="row">
            <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <admin-reservation-edit id="{{ $reservationId }}"></admin-reservation-edit>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection