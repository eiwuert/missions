<?php

use Carbon\Carbon;
use App\Models\v1\Campaign;

class CampaignTest extends TestCase
{   
    /**
     * @test
     */
    function campaign_with_no_published_at_date_is_draft()
    {
        $campaign = factory(Campaign::class, '1n1d2017')->make([
            'published_at' => null
        ]);

        $this->assertEquals('Draft', $campaign->status);
    }

    /**
     * @test
     */
    function campaign_with_future_published_at_date_is_scheduled()
    {
        $campaign = factory(Campaign::class, '1n1d2017')->make([
            'published_at' => Carbon::tomorrow(),
        ]);

        $this->assertEquals('Scheduled', $campaign->status);
    }

    /**
     * @test
     */
    function campaign_with_past_published_at_date_is_published()
    {
        $campaign = factory(Campaign::class, '1n1d2017')->make([
            'published_at' => Carbon::yesterday()
        ]);

        $this->assertEquals('Published', $campaign->status);
    }

    /** @test */
    function create_promocodes()
    {
        $campaign = factory(Campaign::class, '1n1d2017')->create();

        $campaign->createCode('Recruit1', 1, 10000);

        $this->assertEquals(
            $campaign->id, 
            $campaign->promocodes->first()->promoteable_id
        );
    }

}
