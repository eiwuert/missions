@extends('master')

@section('styles')
  @stack('styles')
@endsection()

@section('layout')
  @include('dashboard.partials._toolbar')
  @include('_topnav')
  <div id="dash-page-wrap"><!-- page-wrap important for sticky footer -->
    @yield('content')
  </div>
  @include('_footernav')
  @include('_footer')
@endsection

@section('scripts')
  @stack('scripts')
@endsection