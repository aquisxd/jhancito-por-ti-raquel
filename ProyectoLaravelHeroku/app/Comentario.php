<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comentario extends Model
{
    //
    public $timestamps = false;
    protected $primaryKey = 'comentarios_id';
    protected $guarded = ["id"];
    protected $table ='comentarios';
}
