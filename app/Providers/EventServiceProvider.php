<?php

namespace App\Providers;

use App\Jobs\SendReferralRequestEmail;
use App\Models\v1\Project;
use App\Models\v1\Campaign;
use App\Models\v1\ProjectCause;
use App\Models\v1\Referral;
use App\Models\v1\Trip;
use App\Models\v1\User;
use Illuminate\Contracts\Events\Dispatcher as DispatcherContract;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        'App\Events\DonationWasMade' => [
            'App\Listeners\EmailReceipt',
            'App\Listeners\NotifyRecipient'
        ],
        'App\Events\ReservationWasProcessed' => [
            'App\Listeners\EmailReservationConfirmation',
            'App\Listeners\NotifyFacilitatorsOfNewReservation'
        ],
        'App\Events\TripInterestWasCreated' => [
            'App\Listeners\NotifyFacilitatorsOfNewTripInterest',
            'App\Listeners\NotifyTripRepOfNewTripInterest'
        ]
    ];

    /**
     * The subscriber classes to register.
     *
     * @var array
     */
    protected $subscribe = [
        'App\Listeners\ReservationEventListener',
        'App\Listeners\TransactionEventListener'
    ];

    /**
     * Register any other events for your application.
     *
     * @param  \Illuminate\Contracts\Events\Dispatcher  $events
     * @return void
     */
    public function boot(DispatcherContract $events)
    {
        parent::boot($events);

        Trip::created(function ($trip) {
            $trip->fund()->create([
                'name' => generateFundName($trip),
                'balance' => 0,
                'class' => generateQbClassName($trip),
                'item' => 'Missionary Donation'
            ]);
        });

        Campaign::created(function ($trip) {
            $trip->fund()->create([
                'name' => generateFundName($trip),
                'balance' => 0,
                'class' => generateQbClassName($trip),
                'item' => 'General Donation'
            ]);
        });

        Project::created(function ($project) {
            $project->fund()->create([
                'name' => $project->name . ' Project',
                'balance' => 0,
                'class' => str_plural($project->initiative->cause->name),
                'item' => $project->name .' - '. $project->initiative->cause->name
            ]);
        });

        ProjectCause::created(function ($cause) {
            $cause->fund()->create([
                'name' => $cause->name . ' Cause',
                'balance' => 0,
                'class' => str_plural($cause->name),
                'item' => 'General Donation'
            ]);
        });

        User::created(function ($user) {
            $user->assign('member');
        });

        Referral::created(function ($referral) {
           dispatch(new SendReferralRequestEmail($referral));
        });
    }
}
