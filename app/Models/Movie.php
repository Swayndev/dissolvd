<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Genre;
use App\Models\Person;
use App\Models\User;

class Movie extends Model
{
    use HasFactory;

    public function people()
    {
        return $this->hasMany(Person::class);
    }

    public function genres()
    {
        return $this->hasMany(Genre::class);
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
