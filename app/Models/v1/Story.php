<?php

namespace App\Models\v1;

use App\UuidForKey;
use Carbon\Carbon;
use Conner\Tagging\Taggable;
use EloquentFilter\Filterable;
use Illuminate\Database\Eloquent\Model;

class Story extends Model
{
    use UuidForKey, Filterable, Taggable;

    protected $fillable = ['title', 'content', 'author_id', 'author_type'];

    public function author()
    {
        return $this->morphTo();
    }

    public function users()
    {
        return $this->morphedByMany(User::class, 'publication', 'published_stories');
    }

    public function groups()
    {
        return $this->morphedByMany(Group::class, 'publication', 'published_stories');
    }

    public function fundraisers()
    {
        return $this->morphedByMany(Fundraiser::class, 'publication', 'published_stories');
    }

    public function publish(array $publications)
    {
        foreach($publications as $publication)
        {
            $this->createPublication($publication['type'], $publication['id']);
        }

        return true;
    }

    public function createPublication($method_name, $id)
    {
        return $this->{$method_name}()->attach($id, ['published_at' => Carbon::now()]);
    }

    public function deletePublication($method_name, $id)
    {
        return $this->{$method_name}()->detach($id);
    }
}
